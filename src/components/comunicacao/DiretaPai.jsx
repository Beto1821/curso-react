import React from 'react';
import DiretoFilho from './DiretaFilho';

export default function DiretaPai (props) {
  return (
    <div>
        <DiretoFilho nome="Gui" idade={17} nerd={true}/>
        <DiretoFilho nome="Gabi" idade={15} nerd={false}/>
    </div>
  )
}