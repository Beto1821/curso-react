import React, { useState } from 'react';
import InDiretaFilho from './InDiretaFilho.jsx';

export default function InDiretaPai (props) {
  const [a, b] = [1, 2]
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)
 
  function infos(nome, idade, nerd) {
      setNome(nome)
      setIdade(idade)
      setNerd(nerd)
} 
  return (
    <div>
      <div>
          <span>{ nome } </span>
          <span>{ idade } </span>
          <span> { nerd ? 'true' : 'false' }</span>
      </div>

      <InDiretaFilho quandoClicar={infos} />
    </div>
  )
}