import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";
import productsGridMockData from "../../data/productsGridMockData";

export default function ProductGrid() {
    return (
        <>
            <section>
                <div className={styles.productGridContainer}>
                    {
                        productsGridMockData.map(product => (
                            <ProductCard 
                                key={product.id}
                                {...product} 
                            />
                        ))
                    }
                </div>
            </section>
        </>
    );
}