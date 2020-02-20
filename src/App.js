import React, { Component } from 'react';
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
        <div className="ui inverted fixed huge menu">
          <div className="ui container">
            <a href="index.html" className="item">Berserk</a>
            <button className="ui primary button">criar projeto</button>
            <div className="ui icon input right menu">
              <input type="text" placeholder="procurar projeto..." />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="ui stackable three column grid" id="grid-projetos">
          {
            this.state.lista.map(function (projeto) {
              return (
                <div className="column" >
                  <div className="ui card">
                  <div className="image"><img src="https://picsum.photos/600" alt="" /></div>                    
                  <div className="content">
                      <div className="header">{projeto.nome}</div>
                      <div className="meta"><span className="date">{projeto.usuario}</span></div>
                      <div className="description">{projeto.descricao}</div>
                    </div>
                    <div className="extra content">
                      <a href="index.html">
                        <i aria-hidden="true" className="user icon"></i>
                        22 Friends
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>

      </>
    );
  }
}

export default App;