import React from 'react';

export default function InDiretaFilho(props) {
  const { quandoClicar } = props
  const min = 50
  const max = 70
  const geraIdade = () => parseInt(Math.random() * (max - min)) + min;
  const geraNerd = () => Math.random() > 0.5;
  return (
      <div>
        <div>
          Filho
        </div>
        <button onClick={ () => quandoClicar('João', geraIdade(), geraNerd()) 
          }
         >Fornecer Informações</button>
      </div>
  )
}