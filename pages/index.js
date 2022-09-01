import { useEffect, useState } from 'react';
import * as S from "../styles/styles";
import { Teste, Click } from '../src/utils'
import axios from 'axios';

function Home() {
    const [resposta, setResposta] = useState()
    // fetch("https://teste-aula-metodos-7ba07-default-rtdb.firebaseio.com/camisetas.json")
    //.then(response => response.json())
    //.then(Data => setResposta(Data));
    useEffect(() => {
        axios.get("https://teste-aula-metodos-7ba07-default-rtdb.firebaseio.com/camisetas.json")
            .then(function (response) {
                setResposta(response.data);
            })
    }, [])
    return (
        <>
            Teste
            <br />
            <S.bulls>
            {resposta?.regatasbulls?.time}
            {resposta?.regatasbulls?.numero}
            {resposta?.regatasbulls?.jogador}
            </S.bulls>
            <h1>Times</h1>

            {resposta && Object.values(resposta).map((NBA) => {
                return (
                    <>
                        <p>{NBA.jogador}</p>
                        <p>{NBA.numero}</p>
                        <p>{NBA.time}</p>
                    </>)
            })}
        </>
    );
}

export default Home;

