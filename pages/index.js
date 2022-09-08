import { useEffect, useState } from 'react';
import * as S from "../styles/styles";
import { Teste, Click } from '../src/utils'
import axios from 'axios';

function Home() {
    const [Usuario, setUsuario] = useState()
    const entrar = () => {

    }
    return (
        <>
            <h1>Login</h1><br />
            <label>Usuario</label>
            <input onChange={(e) => setUsuario(e.target.value)} /><br />
            <label>Senha</label>
            <input type='password' /><br />
            <button onClick={() => entrar()}>Entrar</button>
        </>
    );
}
export default Home;


