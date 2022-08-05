import React, { useState } from "react";
import "./TareaFormulario.css";



function TareaFormulario(props) {
    const [input, setInput] = useState('');

    const manejarCambio = e => {
         console.log('escribir...')

    }



    const manejarEnvio = e => {
        const tareaNueva = {
            id: '1',
            texto: 'Hola'
        }
    }
    



    return (
        <form className="tarea-formulario">
            <input
                className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name="texto" />
                onChange={manejarCambio}
            <button className="tarea-boton">
                Agregar Tarea
            </button>



        </form>

    );



}

export default TareaFormulario;