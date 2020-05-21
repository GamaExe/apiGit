/* eslint-disable array-callback-return */
import React , {useState} from 'react';
import * as S from './styled'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
 
export default function Home(props) {
  const history = useHistory();
  const [usuario , setUsuario] = useState('maraoli')
  const [erro, setErro] = useState(false)

  const url = `https://api.github.com/users/${usuario}/repos`

  function handlePesquisa(){
    axios.get(url)
    .then(response =>{
      const repos = response.data;
      const reposName = [];
      repos.map((repository) => {
        reposName.push(repository.name);
      });
      localStorage.setItem('reposName', JSON.stringify(reposName));
      setErro(false)
      history.push('./repositories')
    })
    .catch(err =>{
      setErro(true);
    });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <h1>{props.title} {usuario}</h1>
        <S.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}
