import styles from './Navigation.module.sass'

export default function Navigation() {
	return (
		<nav className={styles.nav}>
			<a className={styles.nav_link} href='#main'>
				ГЛАВНАЯ
			</a>
			<a href='#catalog' className={styles.nav_link}>
				ЦЕНА
			</a>
			<a className={styles.nav_link} href='#advantages'>
				ПРЕИМУЩЕСТВА
			</a>
			<a className={styles.nav_link} href='#examples'>
				ПРИМЕНЕНИЕ
			</a>
			<a className={styles.nav_link} href='#contacts'>
				КОНТАКТЫ
			</a>
			<a
				className={`${styles.nav_link} ${styles.nav_tel}`}
				href='tel:+7 (800) 555-25-97'
			>
				8 (800) 555-25-97
			</a>
		</nav>
	)
}
