import React from 'react'

export default function Aleatorio (props) {
  const { min, max} = props
  const aleatorio = parseInt(Math.random() * (max - min))+ min
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>Valor Minimo: {min}</p>
      <p>Valor Maximo: {max}</p>
      <p>Valor Escolhido: {aleatorio}</p>
    </div>
  )

}