## Questão 1

Para essa questão é necessário ter instalado na máquina node.js e postgresql.

### Inicializando o Banco de dados

Rode esses comandos no terminal na mesma pasta que os arquivos ```relacoes-prates-ddl.sql``` e ```relacoes-prates-dml.sql```.

Com o postgres instalado na máquina, entre no SGBD e coloque:

```sql
CREATE ROLE daniel WITH LOGIN PASSWORD 'root';
```
para criar o usuário daniel com senha "root" (se quiser criar outro usuário com outra senha altere esses valores no arquivo .env na pasta backend)

Altere a função do usuário daniel:

```sql
ALTER ROLE daniel CREATEDB;
```

Faça logout do postgresql...


```sql
\q
```

...e volte com o usuário daniel (para conferir se está tudo certo):

```bash
psql -d postgres -U daniel
```

E insira a senha para daniel. Dentro do postgresql novamente, crie o esquema que conterá as tabelas relacionadas à questão e se conecte a ele.

```sql
CREATE DATABASE conexoes_jean_prates;
\c conexoes_jean_prates;
```

Crie as tabelas rodando o arquivo ddl:

```sql
\i relacoes-prates-ddl.sql
```

E faça a carga inicial de dados com o arquivo dml:

```sql
\i relacoes-prates-dml.sql
```

Pronto, a carga inicial da nossa base está feita.

### Iniciando backend

Va para a pasta backend e instale os pacotes com npm:

```bash
npm install package.json
```

Inicie o servidor backend

```bash
npm start
```

Devem aparecer as seguintes mensagens no terminal:

```bash
> backend@1.0.0 start
> node index.js

Server running on port 5000, http://localhost:5000
```

Se quiser conferir se a API está rodando corretamente, coloque no navegador [http://localhost:5000](http://localhost:5000).

### Rodando frontend

Vá para a pasta frontend e novamente instale os pacotes com npm:

```bash
npm install package.json
```

Para iniciar o site, rode (o site demora um pouco para inciar):

```bash
npm start
```

E coloque no navegador [http://localhost:3000](http://localhost:3000) para abrir o site.

### O site

A primeira seção do site contém cards com informações sobre as conexões de Jean Paul Prates. Logo em seguida há um formulário para preencher que adiciona dados ao banco de dados. Para adicionar e ver um novo stakeholder, preencha o formulário (deve aparecer uma mensagem de sucesso) e recarregue a página.

## Questão 2

Essa questão foi toda feita em um Jupyter Notebook.