import CardProduto from "@/components/CardProduto";
import "./produtos.css"

export default function Produtos() {
    
    const listaProdutos = [

        {
            id: 1,
            titulo: "Notebook ideapad gaming",
            descricao: "Um notebook gamer para seus melhores jogos",
            imagem: "./imagens/ideapad.png",
            preco: 3999.00
            
        },

        {
            id: 2,
            titulo: "Monitor",
            descricao: "Acompanha HDR e IPS",
            imagem: "./imagens/monitor.png",
            preco: 987.20

        },

        {
            id: 3,
            titulo: "Mouse MX Logitech",
            descricao: "O melhor que a tecnologia tem a oferecer",
            imagem: "./imagens/mouse.png",
            preco: 678.83

        }

    ];

    return (
        <>
            <h1>Listagem de produtos</h1>
            <div className="card-container">

                {listaProdutos.map(produto => {
                    return <CardProduto 
                    key={produto.id}
                    titulo={produto.titulo}
                    descricao={produto.descricao}
                    imagem={produto.imagem}
                    preco={produto.preco} />

                })}

            </div>
        </>
    )
}