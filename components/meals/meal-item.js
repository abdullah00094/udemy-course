import Link from 'next/link';
import Image from 'next/image';

import customClasses from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={customClasses.meal}>
      <header>
        <div className={customClasses.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={customClasses.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={customClasses.content}>
        <p className={customClasses.summary}>{summary}</p>
        <div className={customClasses.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}