import React from 'react';
import TareaFormulario from './componentes/TareaFormulario';
import './ListaDe Tareas.css';

//fracmentos REACT
function ListaDeTareas(){
    return (
        <>
            <TareaFormulario />
            
            <div className='tareas-lista-contenedor'>

                LISTA TAREAS
            </div>
        </>
    );
};

export default ListaDeTareas;

