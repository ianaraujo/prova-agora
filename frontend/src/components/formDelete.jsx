import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import styles from '../style/components/form.module.css';

export default function FormDelete() {

	function removeStakeholder(nome) {
		fetch('http://localhost:5000/deleta-sh', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'User-Agent': 'insomnia/8.6.1'
			},
			body: JSON.stringify({ nome }),
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

		removeStakeholder(nome)

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
					Insira o nome de um stakeholder para excluí-lo da base
				</p>

				<form id="adolpho-form" className={styles.form} method="post" onSubmit={submitForm}>
					<label htmlFor="nome">Nome do stakeholder</label>
					<input
						className={styles.inputforms}
						name="nome"
						maxLength={100}
						required />

					<div className={styles.botaoForms}>
						<button
							id="button_forms"
							type="submit"
							value="Send">
							<span>
								Excluir
							</span>
						</button>
					</div>

					<ToastContainer />
				</form>
			</div>
		</>
	)
}