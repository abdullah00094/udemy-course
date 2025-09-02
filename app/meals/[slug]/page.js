import Image from 'next/image';
import customClass from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
export default function MealDetailsPage({params}) {
  const meal = getMeal(params.slug);
  if(!meal){
    return notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />'); 
  // console.log(meal);
  return <>
  
    <header className={customClass.header}>
    <div className={customClass.image}>
    <Image src={meal.image.startsWith('/') ? meal.image : `/${meal.image}`} alt={meal.title} fill />
    </div>
    <div className={customClass.headerText}>
      <h1>{meal.title}</h1>
      <p className={customClass.creator}>
        <span>by:</span> <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
      </p>
      <p className={customClass.summary}>{meal.summary}</p>
    </div>
    </header>
    <main className={customClass.main}>
      <p className={customClass.instructions} dangerouslySetInnerHTML={{
        __html:meal.instructions,
      }}></p>
    </main>
    </>
  
}
