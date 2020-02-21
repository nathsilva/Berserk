import React, { Component } from 'react';

class CardProjeto extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0
        }
        this.addLike = this.addLike.bind(this);
    }

    componentDidMount() {
        this.setState({ likes: this.props.likes })
    }

    addLike() {
        let likes = parseInt(this.state.likes) + 1
        fetch(
            "http://localhost:8080/api/projetos/" + this.props.id,
                {
                    method: 'PUT',
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify({likes: likes}) 
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
                <img src="https://vigte.https://i.imgur.com/Ap2hNFh.jpg://i.imgur.com/Ap2hNFh.jpgtps://imgur.com/Ap2hNFh.nocookie.net/berserk/images/0/0f/Guts_Post-Eclipse_Manga.jpg/revision/latest/scale-to-width-down/340?cb=20150911201913&path-prefix=pt-br://www.google.com/url?sa=i&url=https%3A%2F%2Fberserk.fandom.com%2Fpt-br%2Fwiki%2FGuts%2FHist%25C3%25B3ria&psig=AOvVaw01pdlTzxF99s206L_eaiMg&ust=1582414025378000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODRxYXm4-cCFQAAAAAdAAAAABAD" />
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