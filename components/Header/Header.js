import styles from './Header.module.sass'
import Navigation from '../Navigation/Navigation'
import Burger from '../Burger/Burger'

export default function Header({size}) {
	console.log(size)
	return (
		<header className={styles.header}>
			<div className={styles.header_wrapper}>
				<img
				src='/images/logo.png'
				alt='Логотип ЦСК'
				className={styles.header_logo}
				
				/>
				{ size > 990? <Navigation /> : <Burger />}
			</div>

		</header>
	)
}
