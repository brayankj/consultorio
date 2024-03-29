import React from 'react';
import Cita from './Cita';

const ListaCitas = ({citas,eliminarCita}) => {

    

    const mensaje =  Object.keys(citas).length === 0 ? 'No Hay Diagnosticos' : 'Administra los pacientes Aquí';
    return ( 
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="lista-citas row d-flex aling-items-center">
                    {citas.map(cita => (
                        <Cita 
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default ListaCitas;