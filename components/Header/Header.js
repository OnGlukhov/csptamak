import styles from './Header.module.sass'
import Navigation from '../Navigation/Navigation'
export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header_block}>
				<img
					src='/images/logo.png'
					alt='Логотип ЦСК'
					className={styles.header_logo}
				/>
				<Navigation />
			</div>
		</header>
	)
}
