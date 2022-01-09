import styles from './Description.module.sass'

export default function Description() {
	return (
		<section className={styles.description}>
			<h3 className={styles.description_title}>
				Что такое <span>ЦСП</span>
			</h3>
			<div className={styles.description_wrapper}>
				<p className={styles.description_subtitle}>
					ЦСП (Цементно-стружечные плиты) ТАМАК - это материал нового поколения.
					Он прочный, влагостойкий и долговечный, с плотностью 1250-1400кг/м3,
					толщиной 8-36 мм, гладкой и твердой поверхностью! Давайте разберемся
					почему.
				</p>
				<p className={styles.description_subtitle}>
					Как понятно из названия, ЦСП производят из цемента и древесной
					стружки. Цемент хорошо сопротивляется воспламенению, а древесная
					стружка не дает плите растрескаться на морозе или жаре.
				</p>
				<p className={styles.description_subtitle}>
					К тому же, цементно-стружечные плиты обладают превосходными тепло и
					звукоизоляционными качествами. Это делает данный материал
					универсальным для проведения наружных и внутренних работ в разных
					климатических условиях. С материалом работать так же легко, как и с
					обычными лесоматериалами. Но в отличие от дерева, цсп надежно защищен
					от повреждения насекомыми и грызунами, и практически не боится
					грибковых образований.
				</p>
			</div>
			<div className={styles.description_percentages}>
				<div className={styles.description_item}>
					<img
						className={styles.description_item_img}
						src='/images/icon1.png'
						alt='ГИДРАЦИОННЫЕ ДОБАВКИ'
					/>
					<p className={styles.description_item_number}>2 .5%</p>
					<p className={styles.description_item_text}>ГИДРАЦИОННЫЕ ДОБАВКИ</p>
				</div>
				<div className={styles.description_item}>
					<img
						className={styles.description_item_img}
						src='/images/icon2.png'
						alt='ДЕРЕВЯННАЯ СТРУЖКА'
					/>
					<p className={styles.description_item_number}>24 %</p>
					<p className={styles.description_item_text}>ДЕРЕВЯННАЯ СТРУЖКА</p>
				</div>
				<div className={styles.description_item}>
					<img
						className={styles.description_item_img}
						src='/images/icon3.png'
						alt='ВОДА'
					/>
					<p className={styles.description_item_number}>8 .5%</p>
					<p className={styles.description_item_text}>ВОДА</p>
				</div>
				<div className={styles.description_item}>
					<img
						className={styles.description_item_img}
						src='/images/icon4.png'
						alt='ПОРТЛАНД-ЦЕМЕНТ'
					/>
					<p className={styles.description_item_number}>65 %</p>
					<p className={styles.description_item_text}>ПОРТЛАНД-ЦЕМЕНТ</p>
				</div>
			</div>
		</section>
	)
}
