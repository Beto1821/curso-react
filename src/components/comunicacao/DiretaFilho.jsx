import React from 'react';

export default function DiretaFilho (props) {
  return (
    <div>
        <span>{ props.nome } </span>
        <span> <strong>{ props.idade}</strong>  </span>
        <span>{ props.nerd ? 'Verdadeiro' : 'False' }</span>
    </div>
  )
}