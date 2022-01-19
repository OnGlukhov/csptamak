import styles from './FirstScreen.module.sass'
import { Link } from 'react-scroll'

export default function FirstScreen() {
	return (
		<section className={styles.firstScreen} id='main'>
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
					<Link
						to="contacts"
						spy={true}
						smooth={true}
						hashSpy={true}
						duration={300}
						isDynamic={true}
						ignoreCancelEvents={false}
						spyThrottle={300}
					>
						<button className={styles.firstScreen_button}>
							ОСТАВИТЬ ЗАЯВКУ
						</button>
					</Link>
				</div>
			</div>
			<div className={styles.firstScreen_wrapper}></div>
		</section>
	)
}
