import React, { Component } from 'react';
import CardProjeto from "./components/CardProjeto";
import './App.css';

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
      this.setState({lista: result.data})
    });
  }

  render() {
    return (
      <>
        <div class="ui menu inverted">
          <h2 class="ui header item">Berserk</h2>
          <span class="item">
            <button class="ui animated blue basic inverted button ">
              <span class="visible content">Criar Projeto</span>
              <span class="hidden content">
                <i aria-hidden="true" class="arrow right icon"></i>
              </span>
            </button>
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