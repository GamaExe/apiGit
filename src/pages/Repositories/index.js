import React, {useEffect, useState} from 'react';
import {useHistory } from 'react-router-dom'
import * as S from './styled'

export default function Repositories() {
    const [repos, setRepos] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        let reposName = localStorage.getItem('reposName');
        if(reposName != null){
            reposName = JSON.parse(reposName);
            setRepos(reposName);
            localStorage.clear();
        }else{
            history.push('./');
        }
    },[history]);

    return(
        <>
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List> 
                {repos.map(repo => {
                    return(
                        <S.ListItem>Repositório: {repo}</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
        </>
    )
}