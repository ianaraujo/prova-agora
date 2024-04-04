import './App.css';
import Form from './components/form'
import FormDelete from './components/formDelete';
import OutrasRelacoes from './components/outrasRelacoes';
import PaginaSh from './components/paginaSh';

function App() {
  return (
    <div className="main-content">
      <PaginaSh />

      <OutrasRelacoes />

      <h2>
        Adiciona Stakeholders
      </h2>

      <Form />

      <h2>
        Remove Stakeholders
      </h2>

      <FormDelete />
    </div>
  );
}

export default App;
