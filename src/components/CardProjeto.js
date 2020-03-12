import React, { Component } from "react";
import api from '../api';

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
    let novo_likes = parseInt(this.state.likes) +1;
    api.put(`projetos/${this.props.id}`, JSON.stringify({likes: novo_likes}) )
    .then(function(){
    this.setState({likes: novo_likes})
    })
    .catch(e =>{

    })

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