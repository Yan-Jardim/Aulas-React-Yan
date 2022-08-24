import { isExpressionWithTypeArguments } from "typescript";
import * as S from "../styles/styles";
import { Teste, Click } from '../src/utils'

function Home() {
    const mensagem = 'É Muito Loko'
    const subMenssagem = 'Yan'
    return (
        <div className="Home">

            <form>

                <input onChange={(e) => { Teste(e.target.value) }} />

                <button onClick={(e) => { Click(mensagem, subMenssagem) }}>Enviar</button>

            </form >

        </div>
    );
}
export default Home;

