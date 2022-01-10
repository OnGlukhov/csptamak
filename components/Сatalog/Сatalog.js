import styles from './Сatalog.module.sass'
import { products } from '../../data/products'
import React, { useState } from 'react';

export default function Сatalog() {
	const [productsFilter, setProductsFilter] = React.useState(products)
	const [state, setStaite] = React.useState({
		chose: 0
	})
	// setStaite({chose: -1})
	console.log(state.shose)
	
	const filterProducts = size => {
		if(!size) {
			return setProductsFilter(products)
		} else {
			setProductsFilter(products.filter(i => i.options.value === size))
		}
		
	} 
	return (
		<section className={styles.catalog}>
			<h1 className={styles.catalog_title}>
				Размеры и цены <span>ЦСП</span> плит
			</h1>
			<p className={styles.catalog_subtitle}>
				У нас представлены листы стандартного размера 2700 × 1250 мм и 3200 х
				1250, с толщиной ЦСП плиты от 8 до 24 мм.
			</p>
			<div className={styles.catalog_size}>
				<ul className={styles.catalog_list}>
					<li onClick={() => { filterProducts(false) 
					setStaite(state => ({...state, shosen: -1}))
					} } className={-1 === state.shosen? `${styles.active} ${styles.catalog_list_item}` : styles.catalog_list_item}>Все</li>
					{products.map((product, index) => (
						<div className={styles.catalog_wrapper}>
							{/* <li onClick={() => filterProducts(product.options.value)} key={index} className={index === state.shosen? styles.active: styles.catalog_list_item}> */}
							<li onClick={() => {
								filterProducts(product.options.value)
								setStaite(state => ({...state, shosen: index}))
							}
							} key={index} className={index === state.shosen? `${styles.active} ${styles.catalog_list_item}` : styles.catalog_list_item}>
								<a>
								{`${product.options.value} ${product.options.key}`}
								</a>
							</li>
						</div>

					))
					}
				</ul>
				<div className={styles.catalog_line}></div>
			</div>
			<div className={styles.catalog_products}>
				{productsFilter.map((product, index) => (
				<div key={product.id} className={styles.catalog_product}>
					<img className={styles.catalog_product_img} src={`${product.img}`}/>
					<p className={styles.catalog_product_price}>{product.price.value} {product.price.key}</p>
					<p className={styles.catalog_product_size}>{product.title}</p>
					<div className={styles.overlay}></div>

				</div>
				))
				}

			</div>
		</section>
	)
}
