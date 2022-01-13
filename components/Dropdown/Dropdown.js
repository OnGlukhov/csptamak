import styles from './Dropdown.module.sass'
import React, { useState } from 'react';

export default function Dropdown({props}){
	console.log(props)
	const [isActive, setIsActive] = useState(false)
	return (
		<div className={styles.dropdown}>
			<button onClick={() => setIsActive(!isActive)} className={styles.dropdown_button}>
				Выбрать
				<img className={isActive && styles.dropdown_img} src={'/images/arrow.svg'}></img>
			</button>
			<ul className={styles.dropdown_menu}>
				{/* {products.map((product, index) => (
					<li key={index}><a className={styles.dropdown_item}>{`${product.options.value} ${product.options.key}`}</a></li>
				))} */}
			</ul>

		</div>
	)

}