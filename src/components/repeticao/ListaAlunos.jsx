import React from 'react';
import alunos from '../../data/alunos'

export default function listalunos(props) {
  const lis =  alunos.map((aluno) => {
    return (
      <li key={aluno.key}>
        {`${aluno.id}) ${aluno.nome} -> ${aluno.nota}` }
      </li>
    );
});
  return (
    <div>
      <ul style={{ listStyle: 'none'}}>
        {lis}
      </ul>
    </div>
  )
}