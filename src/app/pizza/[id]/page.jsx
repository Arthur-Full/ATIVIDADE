"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import dados from "@/dadosPizza.json";
import "./pizza.css"


export default function Pizza() {
    const params = useParams(); //pega o parametro pelo id que tem no filme encontrado ele sempre joga pra essa página mas ele identifica o id que vc está tentando acessar
    const [pizza, setPizza] = useState();
    
    useEffect( () => {
        const pizzaEncontrado = dados.find(f => f.id == params.id);
        setPizza(pizzaEncontrado);
    }, [] )

    //duas maneiras e será usado o hook

    return(
        <main className="container-pizza">
            {pizza && <>
            <h1>Nome da pizza:{pizza.name}</h1>
            <img src={pizza.image} alt=""/>
            <h3>Tempo de preparo em minutos: {pizza.prepTimeMinutes}</h3>
            <h3>Tempo de cozimento em minutos: {pizza.cookTimeMinutes}</h3>
            <h3>Porções: {pizza.servings}</h3>
            <h3>{pizza.difficulty}</h3>
            <h3>{pizza.cuisine}</h3>
            <h3>{pizza.caloriesPerServing}</h3>
            <h3>{pizza.ingredients}</h3>
            <h3>{pizza.difficulty}</h3>
            
            
            </>}
        </main>
    )
}