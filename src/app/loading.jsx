import LoadingSpinner from "@/components/loadingSpinner"

export default function Loading(){
    return(
        <>
        <div className="conteiner">
            <div className="flex">
                <LoadingSpinner/>
                <h2>Carregando...</h2>
            </div>
        </div>
        </>
    )
}