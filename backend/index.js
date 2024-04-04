const express = require('express');
const cors = require('cors');
const knex = require('knex');
const { parse } = require('dotenv');
require('dotenv').config();

const db = knex({
	client: 'pg',
	connection: {
		host: process.env.DATABASE_HOST,
		user: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE,
	},
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// usando cors para não ter um erro quando tentamos acessar o servidor
// de uma localização diferente da do servidor
app.use(cors());

// GET: buscando nome e cargo de todos os stakeholders
app.get('/', (req, res) => {
	db.select('shnome', 'shcargo', 'shpartido', 'shrazao', 'shfotourl')
		.from('stakeholders')
		.then((data) => {
			// console.log(data);
			res.json(data);
		})
		.catch((error) => {
			// console.log(error);
		});
});

// GET: busca as relacoes para um stakeholder na base
app.get('/relacoes', (req, res) => {
	const stakeholderId = req.params.stakeholderId;
	db.raw("SELECT sh1.shnome AS stakeholder, sh2.shnome AS relacionado_a FROM relacoes AS r JOIN stakeholders AS sh1 ON r.shid = sh1.shid JOIN stakeholders AS sh2 ON r.temrelacaoshid = sh2.shid")
	// db.select('sh1.nome as stakeholder', 'sh2.nome as relacionado_a')
	// 	.from('relacoes as r')
	// 	.join('stakeholders as sh1 on r.shid = sh1.shid')
	// 	.join('stakeholders as sh2 on r.temrelacaoshid')
		.then((data) => {
            // console.log(data);
            res.json(data);
        })
        .catch((err) => {
            // console.log(err);
        });
})

// POST: adiciona stakeholders na base
app.post('/adiciona-sh', (req, res) => {
	const parsed = JSON.parse(Object.keys(req.body)[0])
	const { nome, cargo, razao, partido } = parsed;
	db('stakeholders')
		.insert({
			shnome: nome,
			shcargo: cargo,
			shfotourl: 'a',
			shrazao: razao,
			shpartido: partido
		})
		.then(() => {
			// console.log('stakeholder adicionado');
			return res.json({ msg: 'stakeholder adicionado' });
		})
		.catch((error) => {
			// console.log(error);
		});
});

// DELETE: deleta stakeholder pelo seu id
app.delete('/deleta-sh', (req, res) => {
	const parsed = JSON.parse(Object.keys(req.body)[0])
	const { nome } = parsed
	// const shNome = req.body;
	// const nome = shNome.shnome;
	console.log("nome: ")
	console.log(nome)

	db('stakeholders')
		.where('shnome', '=', nome)
		.del()
		.then(() => {
            console.log('Stakeholder excluído');
            return res.json({ msg: 'Stakeholder excluído' });
        })
        .catch((err) => {
            console.log(err);
        });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));