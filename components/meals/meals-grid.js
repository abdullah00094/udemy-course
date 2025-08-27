import customClass from "./meals-grid.module.css";
import MealItem from "./meal-item";
export default function MealsGrid({meals}) {
  return <ul className={customClass.meals}>
    {meals.map(meal => (
      <li key={meal.id}>
      
      <MealItem {...meal}/>

      </li>
    ))}
    {console.log(meals.alt)}
  </ul>
}