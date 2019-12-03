import React from 'react';

const Cita = ({cita,eliminarCita}) => ( 
    <div className="col-12 col-md-4">
        <div className="media mt-3">
            <div className="media-body">
                <h4 className="mt-0 text-center"><span>Paciente</span> {cita.nombre}</h4>
                <p>Fecha: {cita.fecha}</p>
                <p>Hora: {cita.hora}</p>
                <p>Observaciónes: {cita.observaciones}</p>
                <p>El paciente presenta sintomas de {cita.tercerSintoma} medicar tramiento para su recuperación</p>
                <button className="btn btn-danger btn-block" onClick={()=>eliminarCita(cita.id)} >
                    Borrar X
                </button>
            </div>
        </div>
    </div>
 );

 
export default Cita;