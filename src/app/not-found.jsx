import Link from "next/link";
import NotFoundBurry from "@/components/not-found-buddy"

export default function NotFound(){
    return(
        <>
        <div className="container">
            <div className="flex">
                <h2>Conteúdo não encontrado!!</h2>
                <p>Erro 404</p>
                <NotFoundBurry className="mascote"/>
                <Link href={"/"}>Voltar</Link>
            </div>
        </div>
        </>
    )
}