import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  constructor(){
    super();
    this.state = {notas: []};
    this._novasNotas = this._novasNotas.bind(this);
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas)
  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasNotas)
  }
  _novasNotas(notas){
    this.setState({...this.state, notas}); 
  }
  
  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota
                indice={index}
                titulo={nota.titulo}
                texto={nota.texto}
                apagarNota={this.props.apagarNota}
                rodape={{ indice: index + 1, total: this.props.notas.length }}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
