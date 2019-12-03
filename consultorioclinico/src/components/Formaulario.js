import React, { Component } from 'react';
import uuid from 'uuid'

const stateInicial = {
    cita : {
        nombre: '',
        fecha: '',
        hora: '',
        primerSintoma: '',
        segundoSintoma: '',
        tercerSintoma: '',
        cuartoSintoma: '',
        quintoSintoma: '',
        sextoSintoma: '',
        septimoSintoma: '',
        observaciones: ''
    },
    error : false
}

class Formulario extends Component {

    state = { ...stateInicial }

     handleChange = e => {
         this.setState({
             cita:{
                 ...this.state.cita,
                [e.target.name] : e.target.value
            }
         })
     }

    handleSubmit = e => {
        e.preventDefault();

        const {nombre,fecha,hora,primerSintoma,segundoSintoma,tercerSintoma,cuartoSintoma,quintoSintoma,sextoSintoma,septimoSintoma,observaciones} = this.state.cita;

        if ( nombre === '' || fecha === '' || hora === ''  || primerSintoma === '' || segundoSintoma === '' || tercerSintoma === '' || cuartoSintoma === '' || quintoSintoma === '' || sextoSintoma === '' || septimoSintoma === '' || observaciones === '') {
            this.setState({
                error: true
            });
            return;
        }


        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        this.props.crearNuevaCita(nuevaCita);

        this.setState({
            ...stateInicial
        });

    }


    render() { 

        const {error} = this.state;

        return ( 
            <div className="card mt-3 py-3 bg-secondary">
                <div className="card-body">
                    <h4 className="card-title text-center mb-5">
                        Evaluación del paciente   
                    </h4>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center"> Todos los Campos son obligatorios </div>  : null}
                
                    <form onSubmit={this.handleSubmit} >

                        <div className="form-grup row my-3">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre del Paciente:
                            </label>
                            <div className="col-sm-8 col-lg-10 my-3">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Ejemplo: Juan Pérez"
                                    name="nombre"
                                    onChange={this.handleChange}
                                    value={this.state.cita.nombre}
                                />
                            </div>
                        </div>

                        <div className="form-grup row my-3">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                       
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                       
                        <div className="form-group row my-3">
                                <div className="col-12 col-md-4 my-3">
                                    <select 
                                        onChange={this.handleChange}
                                        value={this.state.cita.primerSintoma} 
                                        name="primerSintoma"
                                        className="form-control" 
                                    >
                                        <option value="biabetes">Orina Constante</option>
                                        <option value="gastritis">Ardor de Estomago</option>
                                        <option value="colesterol">Hinchazon en Extremidades</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-4 my-3">
                                    <select 
                                        onChange={this.handleChange}
                                        value={this.state.cita.segundoSintoma} 
                                        name="segundoSintoma"
                                        className="form-control" 
                                    >
                                        <option value="biabetes">Sed Constante</option>
                                        <option value="gastritis">Perdida de Peso</option>
                                        <option value="colesterol">Perdida de Equilibrio</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-4 my-3">
                                    <select 
                                        onChange={this.handleChange}
                                        value={this.state.cita.tercerSintoma} 
                                        name="tercerSintoma"
                                        className="form-control" 
                                    >
                                        <option value="biabetes">Hambre Excesiva</option>
                                        <option value="gastritis">Nauceas</option>
                                        <option value="colesterol">Dolor de Cabeza</option>
                                    </select>
                                </div>
                        </div>

                        <div className="form-group row my-3">
                                <div className="col-12 col-md-4 my-3">
                                    <select 
                                        onChange={this.handleChange}
                                        value={this.state.cita.cuartoSintoma} 
                                        name="cuartoSintoma"
                                        className="form-control" 
                                    >
                                        <option value="biabetes">Perdida de Peso</option>
                                        <option value="gastritis">Hipo</option>
                                        <option value="colesterol">Ojos amarrillos</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-4 my-3">
                                    <select 
                                        onChange={this.handleChange}
                                        value={this.state.cita.quintoSintoma} 
                                        name="quintoSintoma"
                                        className="form-control" 
                                    >
                                        <option value="biabetes">Aumento de fatiga y debilidad</option>
                                        <option value="gastritis">Eructos</option>
                                        <option value="colesterol">Visión Borrosa</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-4 my-3">
                                    <select 
                                        onChange={this.handleChange}
                                        value={this.state.cita.sextoSintoma} 
                                        name="sextoSintoma"
                                        className="form-control" 
                                    >
                                        <option value="biabetes">Irritación</option>
                                        <option value="gastritis">Mal sabor de boca</option>
                                        <option value="colesterol">Agitación con Actividad leve</option>
                                    </select>
                                </div>
                        </div>

                        <div className="form-group row my-3">
                            <div className="col-12 col-md-4 my-3">
                                    <select 
                                        onChange={this.handleChange}
                                        value={this.state.cita.septimoSintoma} 
                                        name="septimoSintoma"
                                        className="form-control" 
                                    >
                                        <option value="biabetes">Perdida de Vista</option>
                                        <option value="gastritis">Sensación de vació en el estomago</option>
                                        <option value="colesterol">Dolor de Pecho</option>
                                    </select>
                            </div>
                            <div className="col-md-8 my-3">
                                <textarea 
                                    className="form-control"
                                    name="observaciones"
                                    placeholder="Observaciónes y sitnomas relevantes"
                                    onChange={this.handleChange}
                                    value={this.state.cita.observaciones}
                                ></textarea>
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-dark btn-block" value="Agregar Diagnostico" />

                    </form>

                </div>
            </div>
         );
    }
}
 
export default Formulario;