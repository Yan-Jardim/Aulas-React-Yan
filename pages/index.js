import Header from "../src/components/header";
import Secao from "../src/components/Secao";
import Footer from "../src/components/footer";
import * as S from "../styles/styles";



function Home() {
    const mostrar = 1
    const link = 1

    const secao = 'componente'

    return (
        <div className='App'>

            <Header className="header" texto={'aqui é o header'} />

            <Secao texto={'esse é o texto da secao 1'} />

            <Secao texto={'esse é o texto da secao 2'} />

            <Footer texto={'esse é o texto do footer'} />

            {mostrar ? <><S.Link href="https://github.com/Yan-Jardim"> LINK DO GIT</S.Link></> : <>Nada de link aqui </>}
            <br />
            {link ? <><a href="https://github.com/Yan-Jardim"> LINK DO GIT</a></> : <>Nada de link aqui </>}

        </div>

    );
}
export default Home;

//Vai fazer 4 cards que usem o mesmo componente porem mostre textos diferentes

// Mostrar 2 links que consomem o mesmo componente que vai ser passado um boleno props, se um passar true exibe o link, se eu passar false ou não 
// passar nada , não exibe o link