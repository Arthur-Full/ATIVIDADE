"use client"

import './effect.css'
import { pegardados } from './function';

export default function Usuarios() {

    const {listaUsers, msgErro} = pegardados()

    return (
        <main>
                <div classxName='algo-ai'>
                <h1>PÁGINA DE USUÁRIOS</h1>
                {msgErro != "" && <p>{msgErro}</p>}

                {listaUsers.length > 0 ?
                    //se tiver Usuario mostra essa div
                    <div className='blocos'>
                        {listaUsers.map((user) => {
                            return (
                                <div className="bloco-name" key={user}>
                                    <h3>{user.fircstName}{" "}{user.lastName}</h3>
                                    <img src={user.image} />
                                    <p><span>E-mail:</span> {user.email}</p>
                                    <p><span>Sexualidade:</span> {user.gender}</p>
                                    <p><span>Idade:</span> {user.age}</p>
                                </div>
                            )
                        })}
                    </div>
                    :
                    //se não tiver usuario mostra isso
                    <div>
                        sem Usuarios por enquanto! Tente novamente mais tarde...
                    </div>}
                    </div>

        </main>
    )
}