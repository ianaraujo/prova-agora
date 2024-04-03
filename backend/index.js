const express = require('express')
const app = express()
const port = 3001

const stakeholder_model = require('./relacoesJean')

// middleware que permite que o express receba requests com cargas de json
app.use(express.json())
// middleware que faz com que o Express permita requests do React
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
	next();
});

// Responde com todos os dados da tabela de relações quando alguém manda 
// uma requisição GET
app.get('/', (req, res) => {
	stakeholder_model.getRelacoes()
		.then(response => {
			res.status(200).send(response);
		})
		.catch(error => {
			res.status(500).send(error);
		})
})

// Adiciona um stakeholder na tabela quando recebe uma requisição POST
app.post('/stakeholders', (req, res) => {
	stakeholder_model.adicionaStakeholder(req.body)
		.then(response => {
			res.status(200).send(response);
		})
		.catch(error => {
			res.status(500).send(error);
		})
})

// Remove stakeholder da tabelha quando recbe uma requisição GET
app.delete('/stakeholders/:id', (req, res) => {
	removeStakeholder.deleteMerchant(req.params.id)
		.then(response => {
			res.status(200).send(response);
		})
		.catch(error => {
			res.status(500).send(error);
		})
})

// Faz com que o servidor entre em modo de listening. Quando o servidor
// inicia, printa a mensagem definida em console.log.
app.listen(port, () => {
	console.log('App running on port: ' + port);
})