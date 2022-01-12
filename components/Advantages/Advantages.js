import styles from './Advantages.module.sass'
export default function Advantages() {
	return (
		<section className={styles.advantages} id="advantages">
				<h3 className={styles.advantages_title}>Преимущества <span>ЦСП</span></h3>
				<article className={styles.advantages_container}>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>ПОЖАРОБЕЗОПАСНОСТЬ</p>
							<p className={styles.content_subtitle}>Плиты ЦСП «Тамак» — негорючий материал, при пожаре не выделяет токсинов, дыма, ядовитых газов и паров.</p>
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>НАДЕЖНОСТЬ</p>
							<p className={styles.content_subtitle}>ЦСП ТАМАК является прежде всего конструкционным материалом, придающим каркасным конструкциям жесткость.</p>
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>ВЛАГОУСТОЙЧИВОСТЬ</p>
							<p className={styles.content_subtitle}>Цементно-стружечные плиты — прекрасная защита от атмосферных явлений, не пропускают влагу.</p>
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>БИОСТОЙКОСТЬ</p>
							<p className={styles.content_subtitle}>Противостоит воздействию грибков, жуков – древоточцев, домашних грызунов</p>
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>МОРОЗОСТОЙКОСТЬ</p>
							<p className={styles.content_subtitle}>Применения конструкций с ЦСП в Якутии, Ханты-Мансийске подтвердил высокие эксплуатационные свойства материала.</p>
						</div>
					</div>
				</article>
				<h3 className={`${styles.advantages_title} ${styles.margin}`}>Применение <span>ЦСП</span></h3>
				<article className={styles.advantages_container}>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>СТРОИТЕЛЬСТВО ДОМОВ НА ДЕРЕВЯННОМ КАРКАСЕ И КАРКАСНО-ПАНЕЛЬНЫХ ДОМОВ.</p>
							
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>ВНЕШНЯЯ ОТДЕЛКА ДОМОВ И ЗДАНИЙ.</p>
							
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>ВНУТРЕННЯЯ ОТДЕЛКА СУХИХ И ВЛАЖНЫХ ПОМЕЩЕНИЙ ПЛИТАМИ ЦСП.</p>
							
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>МОНТАЖ НЕСЪЕМНОЙ ОПАЛУБКИ ИЗ ЦЕМЕНТНО-СТРУЖЕЧНЫХ ПЛИТ ПРИ МОНОЛИТНОМ СТРОИТЕЛЬСТВЕ.</p>
							
						</div>
					</div>
					<div className={styles.block}>
						<div className={styles.graphics}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>МОЩЕНИЕ ОКРУЖЕНИЯ ОТКРЫТЫХ БАССЕЙНОВ И САДОВЫХ ДОРОЖЕК.</p>
							
						</div>
					</div>
					<div className={styles.block}>
						<div className={`${styles.graphics} ${styles.height}`}></div>
						<div className={styles.content}>
							<p className={styles.content_title}>СТРОИТЕЛЬСТВО ЗАБОРОВ ИЗ МЕТАЛЛОКОНСТРУКЦИЙ И ЦЕМЕНТНО-СТРУЖЕЧНЫХ ПАНЕЛЕЙ</p>
							
						</div>
					</div>
				</article>
		</section>
	)
}
