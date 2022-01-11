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
import FeedBack from '../components/FeedBack/FeedBack'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<FirstScreen />
			<Description />
			<OrderCall />
			<Сatalog />
			<Advantages />
			<Examples />
			<FeedBack />
			
		</div>
	)
}
