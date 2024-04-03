const Pool = require('pg').Pool

// O objeto pool vai nos permitir acessar a base e fazer nossas querys.
const pool = new Pool({
	user: 'daniel',
	host: 'localhost',
	database: 'conexoes_jean_prates',
	password: 'root',
	port: 5432,
});

// obtendo todas as relacoes da base de dados
query = 'select shnome, shcargo from stakeholders;'

const getRelacoes = async () => {
	try {
		return await new Promise(function (resolve, reject) {
			pool.query(query, (error, results) => {
				if (error) {
					reject(error);
				}
				if (results && results.rows) {
					resolve(results.rows);
				}
				else {
					reject(new Error('Nenhum resultado encontrado'));
				}
			});
		});
	}
	catch (error_1) {
		console.error(error_1);
		throw new Error('Internal server error');
	}
};

const adicionaStakeholder = (body) => {
	return new Promise(function (resolve, reject) {
		const { nome } = body;
		pool.query(
			"INSERT INTO stakeholders (shnomeShCargo, ShFotoUrl, ShRazao, ShPartido) VALUES ($1, a, a, a) RETURNING *",
			[nome],
			(error, results) => {
				if (error) {
					reject(error);
				}
				if (results && results.rows) {
					resolve(
						`Um novo stakeholder foi adicionado: ${JSON.stringify(results.rows[0])}`
					);
				} else {
					reject(new Error("Nenhum resultado encontrado"));
				}
			}
		);
	});
};

const removeStakeholder = (id) => {
	return new Promise(function (resolve, reject) {
		pool.query(
			"DELETE FROM stakeholders WHERE id = $1",
			[id],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(`Stakeholder deletado com ID: ${id}`);
			}
		);
	});
};

module.exports = {
	getRelacoes,
	adicionaStakeholder,
	removeStakeholder
};