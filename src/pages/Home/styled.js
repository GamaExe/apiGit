import styled from 'styled-components';

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-itens: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100vw;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.7rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    color: red;
    font-wigth: bold;
    margin-top: 1rem;
`