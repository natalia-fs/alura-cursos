import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota titulo={nota.titulo} texto={nota.texto} rodape={{indice: index+1, total: this.props.notas.length}}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;