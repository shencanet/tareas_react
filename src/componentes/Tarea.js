import React from 'react';
import './Tarea.css';


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        >
        {texto}
      </div>
   
    </div>
  );    
}

export default Tarea;