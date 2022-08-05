import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import './ListaDeTareas.css';



//fracmentos REACT
function ListaDeTareas() {
    const [tareas, setTareas] = useState([]);
    return (
        <>
            <TareaFormulario />

            <div className='tareas-lista-contenedor'>
            {
                tareas.map((tarea) =>
                <tarea texto={tarea.texto}/>)


            }


            </div>
        </>
    );
};

export default ListaDeTareas;

