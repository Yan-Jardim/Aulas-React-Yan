import { useEffect, useState } from 'react';
import * as S from "../styles/styles";
import { Teste, Click } from '../src/utils'

function Home() { 
      const [elenco, setElenco] = useState('Ederson, Marquinhos, Jemerson, Danilo, Marcelo, Casemiro,Arthur Lucas Paquetá, Coutinho, Neymar, Gabriel Jesus') 
      const [nomes, setNomes] = useState('Yan, Malu, Harrison, Jhon, Guilherme, Lucas, Rogerio, Luan, Lais, Celine') 
      const [timeSelecao, setTimeSelecao] = useState('Seleção Brasileira') 
      const [acionador, setAdicionar] = useState('selecao') 
      const [trocarNomes, setTrocaNomes] = useState(0) 
     
      useEffect(() => { 
        if (acionador === 'corinthians') { 
          setElenco('Cássio, Gil, João Victor, Fagner, Du Queiroz, Lucas Piton, Renato Augusto, Paulinho, Róger Guedes, Giuliano, Willian') 
          setTimeSelecao('Corinthians') 
        } 
        else if (acionador === 'sao paulo') { 
          setElenco('Jandrei, Diego Costa, Igor V, Reinaldo, Calleri, Rafinha, Léo, Nestor, Igor Gomas, Pablo Maia, Patrick') 
          setTimeSelecao('São Paulo') 
        } 
        else if (acionador === 'palmeiras') { 
          setElenco('Weverton, Marcos Rocha, Luan, Gustavo Gomes, Piquerez, Danilo, Zé Rafael, dudu, Raphael Veiga, Gustavo Scarpa') 
          setTimeSelecao('Palmeiras') 
        } 
        else if (acionador === 'selecao') { 
          setElenco('Alisson, Danilo, Marquinhos, Thiago Silva, Guilherme Arana, Casemiro, Fred, Lucas Paquetá, Antony, Neymar e Vinícius Júnior') 
          setTimeSelecao('Seleção Brasileira') 
        } 
     
      }, [acionador]); 
     
      useEffect(() => { 
        if (trocarNomes === 1) { 
          setNomes('Luiz Fabiano, Lucio, Militão, Casemiro, Antony, Lucas, Rogerio Ceni,Telê Santana, Zetti, Raí ') 
        } 
        else if (trocarNomes === 2) { 
          setNomes('Miguel, Arthur, Gael, Heitor, Theo, Davi, Gabriel, Bernardo, Samuel, João Miguel') 
        } 
      }, 
        [trocarNomes]) 
return ( 
       <> 
         <> 
           <S.Titulo>Exercício 1</S.Titulo> 
           <h2>{timeSelecao}</h2> 
           <p>{elenco}</p> 
           <button onClick={() => setAdicionar('selecao')}>SELEÇÃO BRASILEIRA</button> 
           <button onClick={() => setAdicionar('corinthians')}>CORINTHIANS</button> 
           <button onClick={() => setAdicionar('sao paulo')}>SÃO PAULO</button> 
           <button onClick={() => setAdicionar('palmeiras')}>PALMEIRAS</button> 
         </> 
         <> 
           <h3>Exercício 2</h3> 
           <p>{nomes}</p> 
           <button onClick={() => setTrocaNomes(trocarNomes + 1)}>MUDAR NOMES</button> 
         </> 
         
        </> 
      ); 
    } 
     
export default Home;
// ex 1
// fazer aparecer a lista da seleção Brasileira , só que vc tera 3 botões para trocar os nomes da selecão Brasileira
// Para os jogadores do corinthias, so São paulo e do Palmeiras, 11 jogadores

//ex2
// fazer uma função que nude na tela 10 nomes diferentes, ao clicar no botão , mudar 2 vezes