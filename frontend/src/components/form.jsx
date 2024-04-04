import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import styles from '../style/components/form.module.css';

export default function Form() {

	function adicionaStakeholder(nome, cargo, partido, razao) {
		fetch('http://localhost:5000/adiciona-sh', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'User-Agent': 'insomnia/8.6.1'
			},
			body: JSON.stringify({ nome, cargo, partido, razao }),
		})
			.then(response => {
				return response.text();
			})
			.then(data => {
				alert(data);
			});
	}
	
	const submitForm = (event) => {
		event.preventDefault() //previne que o html faça uma requisição get

		// classe que permite o tratamento de dados de um formulário na forma do que seria um dicionário em python
		const formData = new FormData(event.target)
		const payload = Object.fromEntries(formData)

		console.log(payload.nome)

		const nome = payload.nome
		const cargo = payload.cargo
		const partido = payload.partido
		const razao = payload.razao

		adicionaStakeholder(nome, cargo, partido, razao)

		notify(false, "Enviado")
	}

	const notify = (erro, mensagem) => {
		if (erro) {
			toast.error(mensagem, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
		else {
			toast.success(mensagem, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	}

	return (
		<>
			<div className={styles.formContainer}>
				
				<p>
					Insira um novo stakeholder
					(evite caracteres especiais)
				</p>

				<form id="adolpho-form" className={styles.form} method="post" onSubmit={submitForm}>
					<label htmlFor="nome">Nome</label>
					<input
						className={styles.inputforms}
						name="nome"
						maxLength={100}
						required />

					<label htmlFor="partido">Partido</label>
					<input
						className={styles.inputforms}
						name="partido"
						maxLength={50} />

					<label htmlFor="phone">Cargo</label>
					<input
						className={styles.inputforms}
						name="cargo"
						required />

					<label htmlFor="razao">Relação com Jean Prates</label>
					<textarea
						name="razao"
						required />

					<div className={styles.botaoForms}>
						<button
							id="button_forms"
							type="submit"
							value="Send">
							<span>
								Adicionar
							</span>
						</button>
					</div>

					<ToastContainer />
				</form>
			</div>
		</>
	)
}