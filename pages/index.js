import * as S from "../styles/styles";

function Home() {


    const lista = [
        {
            Nome: "Nome: Yan",
            idade: "Idade: 21",
            data_de_nacimento: "Data de Nacimento: 08/01/2001",
            nome_da_mae: "Nome da Mãe: Luciana",
            nome_do_pai: "Nome do Pai: Erivaldo"
        },
        {
            Nome: "Nome: Malu",
            idade: "Idade: 19",
            data_de_nacimento: "Data de Nacimento: 08/01/2003",
            nome_da_mae: "Nome da Mãe: Elena",
            nome_do_pai: "Nome do Pai: Marcelo"
        },
        {
            Nome: "Nome: Luciana",
            idade: "Idade: 41",
            data_de_nacimento: "Data de Nacimento: 03/06/1980",
            nome_da_mae: "Nome da Mãe: Concilia",
            nome_do_pai: ""
        },
        {
            Nome: "Nome: Neymar jn",
            idade: "Idade: 30",
            data_de_nacimento: "Data de Nacimento: 05/02/1992",
            nome_da_mae: "Nome da Mãe: Nadine",
            nome_do_pai: ""
        },
        {
            Nome: "Nome: Cristiano Ronaldo",
            idade: "Idade: 37",
            data_de_nacimento: "Data de Nacimento: 05/02/1985",
            nome_da_mae: "Nome da Mãe: Maria Dolores",
            nome_do_pai: ""
        }
    ]

    return (
        <div className='App'>
            {
                lista.map(lista => {

                    return (
                        <S.Secao>
                        <S.Lista>{lista.Nome}</S.Lista>
                        <div>{lista.idade}</div>
                        <div>{lista.data_de_nacimento}</div>
                        <div>{lista.nome_da_mae}</div>
                        <div>{lista.nome_do_pai}</div>
                        </S.Secao>
                    )

                }
                )
            }
        </div>

    );
}
export default Home;

//fazer uma lista exibindo5 pessoas com nome, idade, date de nacimento e nome da mãe, e para 3 pessoa
// o nome do pai porem quem não tiver o pai nem o titulo de pai