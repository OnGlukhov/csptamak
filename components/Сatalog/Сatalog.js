import styles from './Сatalog.module.sass'
import { products } from '../../data/products'
import React, { useState } from 'react';

export default function Сatalog() {
	const [productsFilter, setProductsFilter] = React.useState(products)
	const [state, setState] = React.useState({
		shosen: null
	})
	// setState({chose: -1})
	// console.log(state.shose)
	
	const filterProducts = size => {
		if(!size) {
			return setProductsFilter(products)
		} else {
			setProductsFilter(products.filter(i => i.options.value === size))
		}
		
	} 
	return (
		<section className={styles.catalog} id='catalog'>
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
					setState(state => ({...state, shosen: null}))
					} } className={null === state.shosen? `${styles.active} ${styles.catalog_list_item}` : styles.catalog_list_item}>Все</li>
					{products.map((product, index) => (
						<div key={index} className={styles.catalog_wrapper}>
							<li onClick={() => {
								filterProducts(product.options.value)
								setState(state => ({...state, shosen: index}))
							}
							}  className={index === state.shosen? `${styles.active} ${styles.catalog_list_item}` : styles.catalog_list_item}>
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
				{productsFilter.map((product, i) => (
				<div key={i} className={styles.catalog_product}>
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
