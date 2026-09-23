"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import dados from "@/dados.json";

export default function Filme() {
    const params = useParams(); //pega o parametro pelo id que tem no filme encontrado ele sempre joga pra essa página mas ele identifica o id que vc está tentando acessar
    const [filme, setFilme] = useState();
    
    useEffect( () => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, [] )

    //duas maneiras e será usado o hook

    return(
        <main>
            {filme && <>
            
            <h1>{filme.titulo}</h1>
            <img src={filme.imagem} alt=""/>
            <h1>{filme.genero}</h1>
            <h1>{filme.ano}</h1>
            <h1>{filme.sinopse}</h1>
            
            
            </>}
        </main>
    )
}