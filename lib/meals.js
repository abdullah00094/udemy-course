import sql from 'better-sqlite3';
import xss from 'xss';
import fs from 'node:fs';
import slugify from 'slugify';

const db = sql('meals.db');


export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error('Error');
    return db.prepare('SELECT * From meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug=?').get(slug);
    // if(!meal){throw {message: `No meal found for ${slug}`, status:404}}
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
    const exetention = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${exetention}`;
    
    // Convert File to Buffer and save to disk
    const bufferedImage = await meal.image.arrayBuffer();
    const imageBuffer = Buffer.from(bufferedImage);
    
    // Create write stream and write the buffer
    const stream = fs.createWriteStream(`public/images/${filename}`);
    stream.write(imageBuffer);
    stream.end();
    
    // Wait for stream to finish writing
    await new Promise((resolve, reject) => {
        stream.on('finish', resolve);
        stream.on('error', reject);
    });
    
    // Update meal object and save to database
    meal.image = filename;
    meal.image = `/images/${filename}`;

    db.prepare(`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
        )
        `).run(meal);
}
