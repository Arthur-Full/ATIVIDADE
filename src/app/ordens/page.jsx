"use client"
import './ordens.css'
import { useState } from "react";

export default function Ordens() {
    const [ordens, setOrdens] = useState([]); //atualiza a página automaticamente

    const [cliente, setCliente] = useState("");

    const [equipamento, setEquipamento] = useState("");

    const [descricao, setDescricao] = useState("");

    const [erro, setErro] = useState("");

    function cadastrarOrdem(event) {
        event.preventDefault(); //isso previne que a página recarregue... usar sempre
        
        //validações abaixo

        if (
            cliente.trim() === "" || 
            equipamento.trim() === "" || 
            descricao.trim() === "" 
        ){
            setErro("Preencha todos os campos!");
            return; // para não realizar o resto da função
        }
            
        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: "aberta"
        }

        setOrdens([...ordens, novaOrdem]); //isso adiciona um item na lista
        console.log(ordens);
        
        //vamos zerar os campos e o erro

        setCliente("");
        setEquipamento("");
        setDescricao("");
        setErro("");
        
    }

    return (
        <main>
            <div className='container-or'>

            <h1>Ordens de Serviço</h1>

            <form onSubmit={cadastrarOrdem}>
                <div className='alinhar'>
                    <label htmlFor="cliente">Cliente:</label>
                    <input
                        type="text"
                        name="cliente"
                        id="cliente"
                        placeholder="Nome do cliente"
                        value={cliente}
                        onChange={(event/*tecla que está sendo clicada*/) => setCliente(event.target.value)}
                    />
                </div>

                <div className='alinhar'>
                    <label htmlFor="equipamento">Equipamento:</label>
                    <input
                        type="text"
                        name="equipamento"
                        id="equipamento"
                        placeholder="Ex.: Notebook"
                        value={equipamento}
                        onChange={(event/*tecla que está sendo clicada*/) => setEquipamento(event.target.value)}
                    />
                </div>


                <div className='alinhar'>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        placeholder="Descreva o problema"
                        value={descricao}
                        onChange={(event/*tecla que está sendo clicada*/) => setDescricao(event.target.value)}
                    />    
                </div> 


                {erro != "" && <p>{erro}</p>}

                <button type="submit">Cadastrar Ordem</button>

            </form>



            </div>

        </main>
    )

}