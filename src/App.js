import React, { Component } from "react";
import "./App.css";
import CardProjeto from "./components/CardProjeto"
import ModalNovoProjeto from "./components/ModalNovoProjeto"

class App extends Component {
  constructor() {
    super();
    this.state = {
    lista: []
    };
  }


  componentDidMount() {
    fetch("http://localhost:8080/api/projetos")
      .then(res => res.json())
      .then((result) => {
        this.setState({ lista: result.data })
      });
  }

  inserirProjeto = projeto => this.setState({lista: [...this.state.lista, projeto] })
  

  render() {
    return (
      <>
        <div class="ui menu inverted">
          <h2 class="ui header item">Jinder</h2>
          <span class="item">
          <ModalNovoProjeto inserirProjeto={this.inserirProjeto} />
          </span>
          <div class="ui inverted input item right">
            <input type="text" placeholder="Procurar..." />
          </div>
        </div>
        <div class="bloco">
          <div class="ui stackable container three column grid">
            {this.state.lista.map(function (projeto) {
              return (
                <CardProjeto
                  key={projeto.id}
                  nome={projeto.nome}
                  descricao={projeto.descricao}
                  usuario={projeto.usuario} 
                  likes= {projeto.likes}/>
              );
            })}
          </div>
        </div>
        )
      </>
    );
  }
}

export default App;