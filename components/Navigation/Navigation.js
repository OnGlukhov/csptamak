import styles from './Navigation.module.sass'

export default function Navigation() {
	return (
		<nav className={styles.nav}>
			<a className={styles.nav_link} href='/'>
				ГЛАВНАЯ
			</a>
			<a className={styles.nav_link} href='/'>
				ЦЕНА
			</a>
			<a className={styles.nav_link} href='/'>
				ПРЕИМУЩЕСТВА
			</a>
			<a className={styles.nav_link} href='/'>
				ПРИМЕНЕНИЕ
			</a>
			<a className={styles.nav_link} href='/'>
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
