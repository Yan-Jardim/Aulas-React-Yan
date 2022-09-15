import React from "react";

function Cadastro() {
    const name = localStorage?.getItem('usuario');
    return (
        <>
            <p>Olá {name && name} seja bem vindo</p>
            <h1>PORTFÓLIO</h1>
            <input />
        </>
    );
}
export default Cadastro;  