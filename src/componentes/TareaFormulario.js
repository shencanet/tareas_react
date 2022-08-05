import React from "react";
import "./TareaFormulario.css";



function TareaFormulario(props) {
    return (
        <form className="tarea-formulario">
            <input
                className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name="texto" />
            <button className="tarea-boton">Agregar Tarea</button>



        </form>

    );



}

export default TareaFormulario;