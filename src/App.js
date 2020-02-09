import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div class="ui menu inverted fixed">
          <a class="item">Projeto Berserk</a>
          <button class="ui button">
            Criar projeto
          </button>
          <div class="ui icon input">
          <input type="text" placeholder="pesquisar projeto..." />
          <i aria-hidden="true" class="search icon"></i>
        </div>
      </div>

<div class="ui grid three column container">
<div class="column">
  <div class="ui card">
    <div class="image"><img src="/images/avatar/large/matthew.png" /></div>
    <div class="content">
      <div class="header">Matthew</div>
      <div class="meta"><span class="date">Joined in 2015</span></div>
      <div class="description">Matthew is a musician living in Nashville.</div>
    </div>
    <div class="extra content">
      <a>
        <i aria-hidden="true" class="user icon"></i>
        22 Friends
    </a>
    </div>
  </div>
</div>
</div>
</>
 
  );
}

export default App;
