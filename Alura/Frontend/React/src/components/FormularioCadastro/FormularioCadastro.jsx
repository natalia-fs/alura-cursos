import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      texto: "",
      categoria: "Sem categoria"
    };
    this.titulo = "";
    this.texto = "";
  }
  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.setState.titulo = event.target.value;
    this.setState({ titulo: event.target.value });
  }
  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.setState({ texto: event.target.value });
  }
  _handleMudancaCategoria(event){
    event.stopPropagation();
    this.setState({ categoria: event.target.value });
  }
  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.state.titulo, this.state.texto, this.state.categoria);
    this.setState({
      titulo: "",
      texto: "",
    });
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro-input">
          <option defaultChecked={true}>Sem categoria</option>
          {this.props.categorias.map(categoria => {
            return <option>{categoria}</option>
          })}
        </select>
        <input
          value={this.state.titulo}
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          value={this.state.texto}
          rows={10}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        ></textarea>

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
