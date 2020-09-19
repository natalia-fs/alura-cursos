import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    this.state = {categorias: [],};

    this._novasCategorias = this._novasCategorias.bind(this);

  }
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);

  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias)
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias});
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
    // this.setState({ titulo: event.target.value });
  }
  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
    // this.setState({ texto: event.target.value });
  }
  _handleMudancaCategoria(event){
    event.stopPropagation();
    this.categoria = event.target.value;
    // this.setState({ categoria: event.target.value });
  }
  _adicionarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.adicionarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._adicionarNota.bind(this)}>
        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro-input">
          <option defaultChecked={true}>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
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
