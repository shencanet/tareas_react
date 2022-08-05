import React, { useState } from "react";
import "./TareaFormulario.css";



function TareaFormulario(props) {
    const [input, setInput] = useState('');

    const manejarCambio = e => {
         /*console.log('escribir...')*/
         setInput(e.target.value)
         /*console.log(e.target.value);*/

    }



    const manejarEnvio = e => {
        e.preventDefault("envio formulario");
        

        const tareaNueva = {
            id: '1',
            texto: input,
            completada: false
        }
    }
    



    return (
        <form className="tarea-formulario"
        onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name="texto" 
                onChange={manejarCambio}/>
            <button className="tarea-boton">
                Agregar Tarea
            </button>



        </form>

    );



}

export default TareaFormulario;