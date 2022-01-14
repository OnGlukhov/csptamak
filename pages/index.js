import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import FirstScreen from '../components/FirstScreen/FirstScreen'
import Description from '../components/Description/Description'
import OrderCall from '../components/OrderCall/OrderCall'
import Сatalog from '../components/Сatalog/Сatalog'
import Advantages from '../components/Advantages/Advantages'
import Examples from '../components/Examples/Examples'
import Contacts from '../components/Contacts/Contacts'
import Footer from '../components/Footer/Footer'

export default function Home() {
	const [width, setWidth] = useState(null)
	useEffect(() => {
		if(!width) setWidth(window.innerWidth)

		addEventListener('resize', () => {
			setWidth(window.innerWidth)
		})
	},[])
	return (
		<div className={styles.container}>
			<Head>
				<title>ЦСП плита Тамак купить в Москве и Московской области с доставкой</title>
				<meta name='description' content='цсп купить, цсп цена, цсп плита цена	, цсп плита купить, цсп цена купить, цсп москва, тамак цена, цсп тамак, цсп купить в москве, купить, цсп, тамак, интернет, магазин, цена, москва, мо, московская область, недорого, дешево, с доставкой' />
				<meta name='description' content='ЦСП плиты Тамак купить в Москве и Московской области с доставкой недорого позволит наша низкая цена. В наличии на складе, привезем оперативно!' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header width={width}/>
			<FirstScreen />
			<Description />
			<OrderCall />
			<Сatalog width={width}/>
			<Advantages />
			<Examples />
			<Contacts />
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.676628320893!2d37.268873516086465!3d55.67722320528586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b550444d104d95%3A0x2e41f78026092c4!2z0JzQvtC70L7QtNGR0LbQvdCw0Y8g0YPQuy4sIDQ2LCDQntC00LjQvdGG0L7QstC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDMwMDc!5e0!3m2!1sru!2sru!4v1641980162121!5m2!1sru!2sru" width="100%" height="500" style={{border:'none'}} loading="lazy"></iframe>
			<Footer />
		</div>
	)
}
