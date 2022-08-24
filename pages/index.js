import { isExpressionWithTypeArguments } from "typescript";
import * as S from "../styles/styles";

function Home() {
    const mensagem = "Você conseguiu"
    const number = 4

    return (
        <div className='App'>
            <form>
                <label>Escreva um Numero:</label>
                <input onChange={(e) => { alert(JSON.parse(e.target.value) + number) }} />
                <button>enviar</button>
            </form>

            <div onClick={() => { alert('Você conseguiu') }} >

                <p> Texto de onClick</p>

            </div>
        </div>
    );
}
export default Home;
//Onclick é o click
//onChenge é a mundança

//ex1
//fazer um input com onChenge que a pessoa digitar ele vai somar com uma variavel
//com o valor 4 e vai retornar o alert com o sesultado

//ex2
//fazer um click numa div com texto qualquer que retorne um alert o texto "Você conseguiu"
//de uma variavel .