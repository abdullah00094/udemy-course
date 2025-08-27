import sql from 'better-sqlite3';
const db = sql('meals.db');

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error('Error');
    return db.prepare('SELECT * From meals').all();
}

export function getMeal(slug){
    return  db.prepare('SELECT * FROM meals WHERE slug=?').get(slug);
    // if(!meal){throw {message: `No meal found for ${slug}`, status:404}}
}