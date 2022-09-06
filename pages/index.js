import { useEffect, useState } from 'react';
import * as S from "../styles/styles";
import { Teste, Click } from '../src/utils'
import axios from 'axios';

function Home() {
    const [resposta, setResposta] = useState()
    const [time, setTime] = useState()
    const [numero, setNumero] = useState()
    const [jogador, setJogador] = useState()
    const [DadoEditado, setDadoEditado] = useState()
    useEffect(() => {
        axios.get("https://teste-aula-metodos-7ba07-default-rtdb.firebaseio.com/camisetas.json")
            .then(function (response) {
                setResposta(response.data);
            })
    }, [])
    const Cadastro = () => {
        axios.post("https://teste-aula-metodos-7ba07-default-rtdb.firebaseio.com/camisetas.json", {
            time: time,
            numero: numero,
            jogador: jogador
        })
            .then(function (response) {
                alert('Seu time foi Adicionado')
            }).catch(function () {
                alert('Não Conseguimos Cadrastrar seu Time')
            })
    }
    const deletar = (id) => {
        axios.delete(`https://teste-aula-metodos-7ba07-default-rtdb.firebaseio.com/camisetas/${id}.json`, {})
            .then(function (response) {
                alert('Seu Time foi Excluido')
            }).catch(function () {
                alert('Não Conseguimos Excluir seu Time')
            })
    }

    const editar = (id) => {
        axios.patch(`https://teste-aula-metodos-7ba07-default-rtdb.firebaseio.com/camisetas/${id}.json`, {time:DadoEditado})
            .then(function (response) {
                alert('Seu Time foi Editado')
            }).catch(function () {
                alert('Não Conseguimos Editar seu Time')
            })
    }
    return (
        <>
            <h1>Times NBA</h1>
            <>
                {resposta && Object.entries(resposta).map((NBA) => {
                    return (
                        <>
                            {NBA[1].time}
                            <input onChange={(e)=>{setDadoEditado(e.target.value)}}/>
                            <button onClick={() => deletar(NBA[0])}>Excluir</button>
                            <button onClick={() => editar(NBA[0])}>Editar</button><br />
                        </>)
                })}

            </>
            <h2>Adicionar Time</h2>
            <form>
                <label>Time: </label><input onChange={(e) => setTime(e.target.value)} /><br />
                <button onClick={(e) => {
                    e.preventDefault()
                    Cadastro()
                }}>Adicionar</button>
            </form>
        </>
    );
}
export default Home;


