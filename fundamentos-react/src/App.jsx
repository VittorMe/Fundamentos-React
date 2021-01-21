import './App.css'
import React from 'react';

import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import Usuarioinfo from './components/condicional/Usuarioinfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio'
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';


export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                
                <Card titulo="#10-  Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                </Card>
                
                <Card titulo="#09-  Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08- Renderização Condicional" color="#982395">
                    <ParOuImpar numero={20} ></ParOuImpar>
                    <Usuarioinfo usuario={{ nome: 'Vittor' }} />
                    <Usuarioinfo usuario={{ email: 'Vittor@melo.com' }} />
                    <Usuarioinfo />
                </Card>

                <Card titulo="#07-  Tabela Repetição" color="#3A9AA0">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06-Repetição" color="#FF4C65">
                    <ListaAlunos />
                </Card>

                <Card titulo="#05-Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04-Desafio Aleatório" color="#0F0">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#02-Com Parâmetro" color="#E94C6F">
                    <ComParametro
                        titulo="Situação do aluno "
                        aluno="Pedro " nota={9.3} />
                </Card>

                <Card titulo=" #01-Primeiro Componente" color="#E8B71A">
                    <Primeiro></Primeiro>
                </Card>

            </div>
        </div>
    )
} 