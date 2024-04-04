import styles from '../style/components/stakeholder.module.css';

export default function Stakeholder({ nome, partido, cargo, relacao}) {
	return (
		<div className={styles.stakeholderCard}>
			<div className={styles.texto}>
				<h4>
					Nome
				</h4>
				<p>
					{nome} {(partido) ? "(" + partido + ")" : ""}
				</p>
			</div>

			<div className={styles.texto}>
				<h4>
					Cargo
				</h4>
				<p>
					{cargo}
				</p>
			</div>

			<div className={styles.texto}>
				<h4>
					Relação com Jean Prates
				</h4>
				<p>
					{relacao}
				</p>
			</div>
		</div>
	)
}