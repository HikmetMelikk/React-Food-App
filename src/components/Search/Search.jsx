import { useEffect, useState } from "react";
import styles from "./search.module.css";
export default function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState("pizza");
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    //!Syntax of useEffect hook
    useEffect(() => {
        async function fetchFood() {
            const response = await fetch(
                `${apiUrl}?query=${query}&apiKey=${apiKey}`
            );
            const data = await response.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
    }, [query]);

    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.search}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
            />
        </div>
    );
}
