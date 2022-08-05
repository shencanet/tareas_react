import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import './ListaDeTareas.css';



//fracmentos REACT
function ListaDeTareas() {
    const [tareas, setTareas] = useState([]);
    const agregarTarea = tarea => {
        console.log("Tarea agregada");
        console.log(tarea);
    }

    return (
        <>
            <TareaFormulario />

            <div className='tareas-lista-contenedor'>
            {
                tareas.map((tarea) =>
                <tarea texto={tarea.texto}
                completada={tareas.completadaº}

                />)


            }


            </div>
        </>
    );
};

export default ListaDeTareas;

