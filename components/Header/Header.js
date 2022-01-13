import styles from './Header.module.sass'
import Navigation from '../Navigation/Navigation'
import Burger from '../Burger/Burger'

export default function Header({width}) {
	console.log(width)
	return (
		<header className={styles.header}>
			<div className={styles.header_wrapper}>
				<img
				src='/images/logo.png'
				alt='Логотип ЦСК'
				className={styles.header_logo}
				
				/>
				{ width > 990? <Navigation /> : <Burger />}
			</div>

		</header>
	)
}
