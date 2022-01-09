import styles from './OrderCall.module.sass'

export default function OrderCall() {
	return (
		<section className={styles.orderCall}>
			<div className={styles.orderCall_wrapper}>
				<div className={styles.orderCall_block}>
					<h3 className={styles.orderCall_title}>
						Купить цементно-стружечную плиту — <span>не проблема</span>. Звоните
						нам!
					</h3>
					<p className={styles.orderCall_subtitle}>
						Доставка по Москве, Краснодару, Минску, Симферополю, Астрахани,
						Екатеринбургу и Санкт-Петербургу.
					</p>
				</div>
				<a>
					<button className={styles.orderCall_button}>Заказать звонок</button>
				</a>
			</div>
		</section>
	)
}
