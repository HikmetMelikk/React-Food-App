import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "../ItemList.jsx";

export default function FoodDetails({ foodId }) {
    const [isLoading, setIsLoading] = useState(true);
    const [food, setFood] = useState({});
    const FOOD_DETAILS_URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        async function fetchFood() {
            const response = await fetch(
                `${FOOD_DETAILS_URL}?apiKey=${apiKey}`
            );
            const data = await response.json();
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    }, [foodId]);
    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}> {food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />
                <div className={styles.recipeDetails}>
                    <span>
                        <strong> ⏰ {food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        {" "}
                        👦🏻 <strong>Serves {food.servings}</strong>
                    </span>
                    <span>
                        {food.vegetarian
                            ? " 🥦 Vegetarian"
                            : " 🥩 Non-Vegetarian"}
                    </span>
                </div>
                <div>
                    <span>$ {food.pricePerServing / 100} Per Serving</span>
                </div>
                <h2>Ingredients</h2>
                <ItemList food={food} isLoading={isLoading} />
                <h2>Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading ? (
                            <p>Loading</p>
                        ) : (
                            food.analyzedInstructions[0].steps.map((step) => (
                                <li>{step.step}</li>
                            ))
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
}
