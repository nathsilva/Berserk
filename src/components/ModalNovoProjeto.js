import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ModalNovoProjeto extends Component {
    constructor(){
        super()
        this.state = {
            nome: "",
            usuario: "",
            descricao: "",
        }
    }

    handleInputChange(evento){

    }


    render(){
        return(
             <Modal trigger={<Button primary>criar projeto </Button>}>
                <Modal.Header>Cadastrar Projeto</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <form className="ui form">
                        <div className="field">
                         <label>Nome do Projeto</label>
                            <input name="nome" placeholder="nome do projeto" />
                     </div>
                     <div className="field">
                        <label>Autor</label>
                        <input name="autor" placeholder="nome do autor do projeto" />
                    </div>
                    <div className="field">
                        <label>Descrição</label>
                        <textarea name="descricao" ></textarea>
                    </div>
                    <button type="submit" className="ui button primary">Cadastrar</button>
                </form>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)
}
}

export default ModalNovoProjeto 

