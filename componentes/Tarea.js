import React from 'react';
import ReactDOM from 'react-dom/client';
import './Tarea.css';

function Tarea({ texto }){
<div className='tarea-contenedor'>
    <div className='tarea-texto'>
    {texto}
    <div className='tarea-icono'>

    </div>

    </div>
</div>
}

export default Tarea;