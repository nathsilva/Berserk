import React, { Component } from "react";

class CardProjeto extends Component {

  constructor(){
    super();
    this.state = {
      likes:0
    }
    this.addLike = this.addLike.bind(this);
  }

  componentDidMount(){
      this.setState({likes:this.props.likes})
  }

  addLike(){
    let novo_likes = parseInt(this.state.likes +1);
    this.setState({likes: novo_likes})

    fetch(
      "http://localhost:8080/api/projetos/" + this.props.id,
          {
              method: 'PUT',
              headers: {"Content-type": "application/json"},
              body: JSON.stringify({likes: novo_likes}) 
          }
      )
      .then(result => result.json())
      .then(function(result){
          this.setState({ likes: result.likes });
      }.bind(this)
  )
  }

render(){
    return(
      <>
        <div class="column">
        <div class="ui card">
          <div class="image">
            <img src="Guts_Manga.jpg" />
          </div>
          <div class="content">
            <div class="header"> {this.props.nome} </div>
            <div class="meta">
              <span class="date">{this.props.usuario}</span>
            </div>
            <div class="description">
              {this.props.descricao}
            </div>
          </div>

          <div classname="content">
            <span>
              <i aria-hidden="true" className="chat icon"></i>10 comentários
            </span>
            <span href="/" className="right floated botao-like" onClick={this.addLike}>
              <i aria-hidden="true" className="heart icon"></i>{this.state.likes} likes
            </span>
          </div>
        </div>
      </div>
      </>
    )

}

}

export default CardProjeto;