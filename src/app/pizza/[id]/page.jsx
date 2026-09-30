"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import dados from "@/dadosPizza.json";
import "./pizza.css"


export default function Pizza() {
    const params = useParams(); //pega o parametro pelo id que tem no filme encontrado ele sempre joga pra essa página mas ele identifica o id que vc está tentando acessar
    const [pizza, setPizza] = useState();

    useEffect(() => {
        const pizzaEncontrado = dados.find(f => f.id == params.id);
        setPizza(pizzaEncontrado);
    }, [])

    //duas maneiras e será usado o hook

    return (
        <main className="container-pizza-int">

            {pizza && <>


                <div className="nome"><h1>{pizza.name}</h1></div>   

                <div className="caixa">
                    <img className="pizza-img" src={pizza.image} alt="" />
                </div>

                <div className="info-pizza">
                    <p className="instru">Intruções gerais do prato: </p>

                    <div className="info">

                        <p><span>Tempo de preparo em minutos:</span> {pizza.prepTimeMinutes}</p>
                        <p><span>Tempo de cozimento em minutos:</span> {pizza.cookTimeMinutes}</p>
                        <p><span>Quantidade de porções que pode ser servida: </span>{pizza.servings}</p>
                        <p><span>Dificuldade de preparo: </span>{pizza.difficulty}</p>
                        <p><span>Pais de origem: </span> {pizza.cuisine}</p>
                        <p><span>Calorias por porção: </span>{pizza.caloriesPerServing}</p>
                        <p><span>Ingredientes: </span>{pizza.ingredients}</p>
                        <p><span>Instruções: </span>{pizza.instructions}</p>

                    </div>


                </div>

                <div><button>sdadasdadasda</button></div>



            </>}
        </main>
    )
}