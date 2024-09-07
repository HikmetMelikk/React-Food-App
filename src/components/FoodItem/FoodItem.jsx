import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <img
                className={styles.itemImage}
                src={food.image}
                alt={food.title}
            />
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => {
                        setFoodId(food.id);
                    }}
                    className={styles.itemButton}>
                    View Recipe
                </button>
            </div>
        </div>
    );
}
