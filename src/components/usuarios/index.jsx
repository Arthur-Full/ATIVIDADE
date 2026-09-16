import "./Usuarios.css"

export default function user() {
    return ( <>

        {listaUsers.length > 0 ?
            //se tiver Usuario mostra essa div
            <div>
                {listaUsers.map((user) => {
                    return (
                        <div className="bloco-name" key={user}>
                            <h3>{user.firstName}{" "}{user.lastName}</h3>
                            <img src={user.image} />
                            <p>E-mail: <b>{user.email}</b></p>
                            <p>Sexualidade: {user.gender}</p>
                        </div>
                    )
                })}
            </div>
            :
            //se não tiver usuario mostra isso
            <div>
                sem Usuarios por enquanto! Tente novamente mais tarde...
            </div>}
    </>
    )
}
