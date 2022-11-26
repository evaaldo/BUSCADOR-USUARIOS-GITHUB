import './App.css';
import ContainerBaixo from './Componentes/ContainerBaixo/ContainerBaixo';
import ContainerCima from './Componentes/ContainerCima/ContainerCima';

function App() {
  return (
    <div className="App">
      <div>
        <ContainerCima></ContainerCima>
        <ContainerBaixo></ContainerBaixo>
      </div>      
    </div>
  );
}

export default App;
