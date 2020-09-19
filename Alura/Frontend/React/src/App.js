import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: [],
      categorias: ['Games', 'Música', 'Trabalho'],
    };
  }
  criarNota(titulo, texto, categoria) {
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.notas.push(novaNota);
    
    this.setState(novoEstado)
  }
  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado);

  }
  apagarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas: arrayNotas})
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias} criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.state.categorias} adicionarCategoria={this.adicionarCategoria.bind(this)}/>
          <ListaDeNotas notas={this.state.notas} apagarNota={this.apagarNota.bind(this)} />
        </main>
      </section>
    );
  }
}

export default App;
