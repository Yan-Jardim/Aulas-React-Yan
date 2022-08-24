import { Teste, Click } from '../src/utils'

function Home() {

    return (
        <form>
            <input onChange={(e) => { Click(e.target.value) }} />
            <button onClick={(e) => { Click(mensagem, subMenssagem) }}>Enviar</button>
        </form >
    );
}
export default Home;


//if else
// quero que você faça uma condição que se o valor digitado num input for --Guitarra-- o cosole tem
//cordas, se digitar ---bateria--cosole tem pedal e você digitar --microfone coloca tem fios,
//se nenhuma delas atender é para colocar --não existe esse instrumento--

//switch
//quero que vc faça um cosole com ++ caseswitch que faça algo com 3 opções e uma opção para quando não
//atender as 3 opções
