import * as S from "../styles/styles";

function Home() {
    const Lista = [
        {
            nome: "abacaxi",
            quatidade: 2,
            doce: true
        },
        {
            nome: "maçã",
            quatidade: 12,
            doce: true
        },
        {
            nome: "carambola",
            quatidade: 12,
            doce: false
        },
        {
            nome: "limão",
            quatidade: 12,
            doce: false
        }
    ]
    const Lista2 = [
        {
            nome: "abacaxi",
            quatidade: 6,
            doce: true
        },
        {
            nome: "pêssego",
            quatidade: 12,
            doce: true
        },
        {
            nome: "tomate",
            quatidade: 6,
            doce: false
        }
    ]
    const filtrando = Lista.filter(itemLista => {
        return itemLista.doce === false

    })
    console.log(filtrando, 'filtrando')

    const filter = Lista2.filter(itemLista => {
        return itemLista.doce === true

    })
    console.log(filter, 'filtrando')

    return (
        <div className='App'>
            {
                filtrando.map(itemLista => {
                    return (
                        <p>{itemLista.nome}</p>
                    )
                })
            }
            .
            {
                filter.map(itemLista2 => {
                    return (
                        <p>
                            {itemLista2.nome}
                        </p>
                    )
                }

                ) 
            }
        </div>
    );
}
export default Home;

  //FILTER
    //Listagem com 4 obejetos cada objeto contendo 3 item diversoso, e item  boolean
    // só dois sejam true dois vao ser false e exiba os itens que tem essa"false"

    //outro lista que tenha 3 objetos com 3 strinhs e só vão dois item que a string
    // seja abacaxi