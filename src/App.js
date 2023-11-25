import './App.css';
import React from 'react';

function App() {

  return (
    <body>
      <h1 id="title">Formulário de pesquisa</h1>
      <p id="description">Pesquisa para compreender melhor as necessidades da plataforma</p>
      <form id="survey-form">
        <fieldset class="inline">
          <h2>Insira seus dados</h2>
          <label id="name-label">Insira seu nome completo <input placeholder="Ex:.Jose" required id="name" type="text"
            name="name" /></label>
          <label id="email-label">Insira seu email <input placeholder="Ex:.Jose@xxxxx.com" required id="email" type="email"
            name="email" /></label>
          <label id="number-label">Insira sua idade <input placeholder="Ex:.18" min="14" max="100" id="number" type="number"
            name="number" /></label>
          <label required> Selecione sua ocupação atual
            <select id="dropdown">
              <option value="1">Estudante</option>
              <option value="2">Empregado em tempo integral</option>
              <option value="3">Empregado meio turno</option>
              <option value="4">Celetista</option>
              <option value="5">Desempregado</option>
              <option value="6">Outro</option>
            </select>
          </label>
        </fieldset>

        <fieldset class="inline">
          <h2>Você recomendaria a plataforma para alguém?</h2>
          <label id="share" name="share"><input value="1" type="radio" id="share" name="share" />Definitivamente</label>
          <label id="share" name="share"><input value="2" type="radio" id="share" name="share" />Talvez</label>
          <label id="share" name="share"><input value="3" type="radio" id="share" name="share" />Não</label>
        </fieldset>

        <fieldset class="inline">
          <h2>Qual seção deve ser aprimorada?</h2>
          <label id="sec" name="sec"><input value="1" type="checkbox" id="sec" name="sec" />Cursos</label>
          <label id="sec" name="sec"><input value="2" type="checkbox" id="sec" name="sec" />Bibliotecas</label>
          <label id="sec" name="sec"><input value="3" type="checkbox" id="sec" name="sec" />Suporte ao consumidor</label>
          <label id="sec" name="sec"><input value="4" type="checkbox" id="sec" name="sec" />Infraestrutura</label>
          <label id="sec" name="sec"><input value="5" type="checkbox" id="sec" name="sec" />Segurança da informação</label>
        </fieldset>

        <fieldset class="inline">
          <h2>Quais suas sugestões?</h2>
          <textarea id="suggest" name="suggest"></textarea>
          <input id="submit" type="submit" />
        </fieldset>

      </form>
    </body>
  );
}

export default App;
