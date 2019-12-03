import React, { Component, Fragment} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import Formulario from './components/Formaulario';
import ListaCitas from './components/ListaCitas';


class App extends Component {

  state = {
    citas : []
    
  }

 

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos];

    this.setState({
      citas
    }) 
 }

 eliminarCita = id => {
   const citasActuales = [...this.state.citas];
   const citas = citasActuales.filter(cita => cita.id !== id)
   this.setState({
     citas
   })
 }

  render() { 
    return ( 
      <Fragment>
        <div className="container">
          <Header 
            titulo = 'Administrador de Pacientes'
          />
          <Formulario
            crearNuevaCita={this.crearNuevaCita}
          />
          <ListaCitas
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
          />     
        </div>
      </Fragment>
     );
  }

}

export default App;
