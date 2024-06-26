import { useState } from "react";
import NumSelect from "../NumSelect/NumSelect";
import styles from "./Product.module.css";

function Product({ product, dispatch }) {
  const [selectedNum, setSelectedNum] = useState(1);

  return (
    <li className={styles.list}>
      <div className={styles.imgcont}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.productcont}>
        <p>{product.name}</p>
      </div>

      <p className={styles.price}>${product.priceCents}</p>
      <NumSelect selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
      <button
        onClick={() =>
          dispatch({
            type: "addToCartAndQuantity",
            payload: { product, selectedNum },
          })
        }>
        {" "}
        Add to Cart{" "}
      </button>
    </li>
  );
}

export default Product;
