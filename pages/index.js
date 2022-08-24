import { useState } from 'react';
import * as S from "../styles/styles";
import { Teste, Click } from '../src/utils'

function Home() {
    //Use Starte
    const [Teste, setTeste] = useState('O Yan')
    const Funcao = ()=>{
        setTeste('Gosto muito de escutar musica')
    }
    const [numero, setTeste2] = useState(4)
    return (
        <>
            {Teste}
            <button onClick={() => Funcao()}>Trocar o nome</button>
            {numero}
            <button onClick={() => setTeste2(numero * 4)}>Multiplicar</button>
        </>
    );
}
export default Home;
 // vc tera que fazer uma função que muda dois states que exibe na tela numa mesmo frase
 // vc tera que fazer um state com comtador, (* 4( VEZES 4 ))