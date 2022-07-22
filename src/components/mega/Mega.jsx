import React from 'react';
import { useState } from 'react';
import './Mega.css';


export default function Mega(props) {
  const [qtde, setQtde ] = useState(props.qtde || 6);
  const [ numeros, setNumeros] = useState(gerarNumeros(qtde))
  
  function geraNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return array.includes(aleatorio) ?
    geraNumeroNaoContido(min, max, array) : aleatorio
  }
  
  function gerarNumeros(qtde) {
    
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = geraNumeroNaoContido(1, 60, nums)
      return [ ...nums, novoNumero ]
    }, [])
    .sort((n1, n2) => n1 - n2)
    
    return numeros
  }

  return (
    <div className='Mega'>
      <h2>Mega</h2>
      <div>{ numeros.join(' , ') }</div>
      <div>
        <label>Qtde</label>
        <input 
        type="number"
        max="11"
        min="6" 
        value={ qtde } 
        onChange={ 
          e => {
            setQtde(+e.target.value)
            setNumeros((gerarNumeros(qtde)))
          }
           }/>
      </div>
      <button onClick={ () => setNumeros((gerarNumeros(qtde))) }>Gerar Números</button>
    </div>
  )
}