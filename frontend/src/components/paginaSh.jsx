import { useEffect, useState } from 'react'
import styles from '../style/components/paginaSh.module.css'
import Stakeholder from './stakeholder'

export default function PaginaSh() {
	const [dadosSh, setDadosSh] = useState(false)

	function getStakeholders() {
		fetch('http://127.0.0.1:5000/')
			.then(response => {
				return response.text();
			})
			.then(data => {
				setDadosSh(data);
				console.log(dadosSh)
			});
	}

	useEffect(() => {
		getStakeholders();
	}, []);

	let stakeholdersArray = []

	if(dadosSh){
		let dados = JSON.parse(dadosSh)
		dados.forEach((sh) => {
			stakeholdersArray.push(<Stakeholder nome={sh.shnome} partido={sh.shpartido} cargo={sh.shcargo} relacao={sh.shrazao} fotourl={sh.shfotourl}/>)
		})
	}

	return (
		<div className={styles.content}>
			<h1>
				Conexões de Jean Paul Prates
			</h1>
			<div className={styles.stakeholdersCards}>
				{stakeholdersArray}
			</div>
		</div>
	)
}