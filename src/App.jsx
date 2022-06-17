import './App.css'
import React, { Component } from "react";


import ListaDeProdutos from './components/repeticao/ListaDeProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfor';

export default class App extends Component {
  render (){
    return (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
          <Card titulo="#08-Renderização Condicional" color="#004A65">
            <ParOuImpar numero={2}/>
            <UsuarioInfo usuario={{ nome: 'Fernando' }}/>
            <UsuarioInfo usuario={{ email: 'Fer@nando.com' }}/>
            <UsuarioInfo />            
          </Card>      
          <Card titulo="#07-Repetiçao Produtos" color="#004A65">
            <ListaDeProdutos />
          </Card>            
          <Card titulo="#06-Repetição" color="#FF4C65">
            <ListaAlunos />
          </Card>          
          <Card titulo="#05-Componentes com Filhos" color="#00C8F8">
              <Familia sobrenome="Ferreira">
                  <FamiliaMembro nome="Pedro" />
                  <FamiliaMembro nome="Ana" />
                  <FamiliaMembro nome="Gustavo" />
              </Familia>
          </Card>
          <Card titulo="#04-Desafio Aleatório" color="#080">
            <Aleatorio min={1} max={60}/>
          </Card>
          <Card titulo="#03-Fragmento" color="#E94C6F">
            <Fragmento />
          </Card>
          <Card titulo="#02-Com Parâmetro" color="#E8B71A">
          <ComParametro 
            titulo="Situação do Aluno"
            aluno="Pedro" 
            nota={9.3}
            />
          </Card>
          <Card titulo="#01-Primeiro Componente" color="#588C73">
            <Primeiro />
          </Card>
        </div>
    </div>
    )
  }
}