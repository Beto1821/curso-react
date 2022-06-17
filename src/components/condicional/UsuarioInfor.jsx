import React from 'react';
import If from './If';

export default function UsuarioInfo (props) {
  const usuario = props.usuario || {} ;
  return (
    <div>
        <If  test={ usuario && usuario.nome }>
        Seja bem vindo { usuario.nome }!
        </If>
        <If  test={ !usuario || !usuario.nome }>
        Seja bem vindo Amigão!
        </If>        
    </div>
  )
}