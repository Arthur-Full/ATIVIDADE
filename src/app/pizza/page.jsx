"use client"

import { useEffect, useState } from "react";
import dados from "@/dadosPizza.json"
import "./pizza.css"

export default function Pizzas() {
    const [pizzas, setPizzas] = useState([]);
    useEffect( () => {
        setPizzas(dados)
    }, []);

    return (
        <main>
            <h1>Listagem de todos os filmes</h1>
            {pizzas.length > 0 &&
                <div className="container-pizza">
                    {pizzas.map(f => {
                        return (
                            <div key={f.id} className="wrap-pizza">
                                <img src={f.image} alt="" />
                                <h3>{f.name}</h3>
                                <a href={`/pizza/${f.id}`}>Saiba Mais</a>
                            </div>
                        )
                    })}
                </div>}
        </main>
    )
}