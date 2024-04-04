import { useEffect, useState } from 'react'
import styles from '../style/components/outrasRelacoes.module.css'

export default function OutrasRelacoes() {
	const [dadosRelacoes, setDadosRelacoes] = useState(false)

	function getRelacoes() {
		fetch('http://127.0.0.1:5000/relacoes')
			.then(response => {
				return response.text();
			})
			.then(data => {
				setDadosRelacoes(data);
				console.log(dadosRelacoes)
			});
	}

	useEffect(() => {
		getRelacoes();
	}, []);

	let stakeholdersArray = []

	if(dadosRelacoes){
		let dados = JSON.parse(dadosRelacoes)
		console.log(dados)
	}

	return (
		<div className={styles.content}>
			<h1>
				Outras relações na base
			</h1>
			<div className={styles.relacoesContainer}>
				<h3>
					oioioi
				</h3>
			</div>
		</div>
	)
}