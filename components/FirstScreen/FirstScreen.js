import styles from './FirstScreen.module.sass'
export default function FirstScreen() {
	return (
		<section className={styles.firstScreen}>
			<div className={styles.firstScreen_wrapper_block}>
				<div className={styles.firstScreen_block}>
					<div className={`${styles.firstScreen_line} ${styles.fadeInLeft}`}></div>

					<h1 className={styles.firstScreen_title}>
						<span className={styles.firstScreen_span}>ЦСП</span> ТАМАК от 724
						руб.
					</h1>
					<p className={styles.firstScreen_subtitle}>
						ЦСП (Цементно-стружечные плиты) ТАМАК - это материал нового
						поколения. Он прочный, влагостойкий и долговечный, с плотностью
						1250-1400кг/м3, толщиной 8-36 мм, гладкой и твердой поверхностью!
					</p>
					<a>
						<button href='/' className={styles.firstScreen_button}>
							ОСТАВИТЬ ЗАЯВКУ
						</button>
					</a>
				</div>
			</div>

			<div className={`${styles.firstScreen_wrapper} ${styles.fadeIn}`}></div>
		</section>
	)
}
