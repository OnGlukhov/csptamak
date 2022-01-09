import styles from './Сatalog.module.sass'
import { products } from '../../data/products'

export default function Сatalog() {
	console.log('products', products)
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
					<li className={styles.catalog_list_item}>Все</li>
					{products.map(product => (
						<div className={styles.catalog_wrapper}>
							<li key={product.id} className={styles.catalog_list_item}>
								{`${product.options.value} ${product.options.key}`}
							</li>
						</div>

					))}
				</ul>
				<div className={styles.catalog_line}></div>
			</div>
		</section>
	)
}
