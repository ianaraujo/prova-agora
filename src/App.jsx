import { useState, useEffect } from 'react'

function App() {
  const [stakeholders, setStakeholders] = useState(false);

  function getRelacoes() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setStakeholders(data);
      });
  }

  function adicionaStakeholder() {
    let nome = prompt('Coloque o nome do stakeholder');
    fetch('http://localhost:3001/stakeholders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getRelacoes();
      });
  }

  function removeStakeholder() {
    let id = prompt('Coloque id do stakeholder');
    fetch(`http://localhost:3001/stakeholders/${shid}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getRelacoes();
      });
  }

  useEffect(() => {
    getRelacoes();
  }, []);

  return (
    <div>
      {stakeholders ? stakeholders : 'Não há dados sobre stakeholders disponíveis'}
      <br />
      <button onClick={adicionaStakeholder}>Adiciona stakeholder</button>
      <br />
      <button onClick={removeStakeholder}>Remove stakeholder</button>
    </div>
  )
}

export default App;