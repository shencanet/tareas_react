import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import Tarea from './componentes/Tarea';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freecodecamplogo} className='freecodecamp-logo' />

      </div>
      <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1>
      <Tarea  texto='Aprender react'/>
      

      </div>


    </div>
  );
}

export default App;
