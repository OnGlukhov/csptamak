import styles from "./Сatalog.module.sass";
// import { products } from "../../data/products";
import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Size from "../Size/Size";

export default function Сatalog({ width, products }) {
  const [productsFilter, setProductsFilter] = React.useState(products);
  const [state, setState] = React.useState(null);
  const indexItem = (index) => {
    setState(index);
  };
  function requestCategoty() {
    const res = products
      .map((i) => i.options.filter((v) => v.key === "Толщина"))
      .flat();
    let tmpArray = [];
    function itemCheck(item) {
      if (tmpArray.indexOf(item.value) === -1) {
        return tmpArray.push(item.value);
      }
      return;
    }

    const uniqueСollections = res.filter((item) => itemCheck(item));
    const number = uniqueСollections.map((i) => {
      return parseInt(i.value.match(/\d+/g));
    });

    const result = number.sort((a, b) => (a > b ? 1 : -1));

    const newArr = [];
    result.map((i) => {
      newArr.push({ value: i + " мм", key: "Толщина" });
    });

    return newArr;
  }

  const category = requestCategoty();

  const filterProducts = (size) => {
    if (!size) {
      return setProductsFilter(products);
    } else {
      setProductsFilter(
        products.filter((i) => i.options?.find((s) => s.value === size))
      );
    }
  };
  return (
    <section className={styles.catalog} id="catalog">
      <h1 className={styles.catalog_title}>
        Размеры и цены <span>ЦСП</span> плит
      </h1>
      <p className={styles.catalog_subtitle}>
        У нас представлены листы стандартного размера 2700 × 1250 мм и 3200 х
        1250, с толщиной ЦСП плиты от 8 до 24 мм.
      </p>
      <div className={styles.catalog_size}>
        {width < 769 ? (
          <Dropdown
            filterProducts={filterProducts}
            products={products}
            indexItem={indexItem}
            state={state}
            category={category}
          />
        ) : (
          <Size
            filterProducts={filterProducts}
            products={products}
            indexItem={indexItem}
            state={state}
            category={category}
          />
        )}
        <div className={styles.catalog_line}></div>
        <div></div>
      </div>
      <div className={styles.catalog_products}>
        {productsFilter.map((product, i) => (
          <div key={i} className={styles.catalog_product}>
            <img
              className={styles.catalog_product_img}
              src={`https://xn--j1ano.com${product.path}${product.images[0]}`}
            />
            <div className={styles.overlay}>
              <p className={styles.catalog_product_price}>
                {product.cost} руб/лист
              </p>
              <p className={styles.catalog_product_size}>{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
