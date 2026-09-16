import CardPostBlog from "@/components/CardPostBlog";
import Rodape from "@/components/footer";
import Cabecalho from "@/components/header";
import "./noticias.css"


export default function Blog() {

    const PostBlog = [

        {
            id: 1,
            imagem: "./imagens/noticia.png",
            titulo: "Vaquinhas eleitorais passam de R$ 8 milhões; 10 concentram metade",
            descricao: "Robôs e perfis falsos tentam influenciar conversas sobre eleições nas redes",
            day: "25/08/2026"
        },

        {
            id: 2,
            imagem: "./imagens/noticia2.png",
            titulo: "Ilha com forte napoleônico está à venda na Itália por R$ 33 milhões; FOTOS",
            descricao: "",
            day: "26/08/2026"
        },

        {
            id: 3,
            imagem: "./imagens/noticia3.png",
            titulo: "Drones autônomos: veja perguntas e respostas sobre arma operada por IA",
            descricao: "ONU alerta para uso de armas controladas por IA: 'Cruzar linha vermelha moral'",
            day: "25/08/2026"
        },

        {
            id: 4,
            imagem: "./imagens/noticia4.png",
            titulo: "Barraca transparente, poeira e calorão: os perrengues no camping de Barretos",
            descricao: "Pequeno campeão do rodeio em carneiros busca o bi",
            day: "26/08/2026"
        },

        {
            id: 5,
            imagem: "./imagens/noticia5.png",
            titulo: "Por que Dolly Parton foi uma das maiores cantoras de todos os tempos",
            descricao: "Cantora morreu após tratamento 'recente' contra um câncer",
            day: "24/08/2026"
        },

        {
            id: 6,
            imagem: "./imagens/noticia6.png",
            titulo: "EUA suspendem agendamento para vistos de imigrantes em todo o mundo",
            descricao: "O que está por trás da ofensiva de Trump contra voto pelo correio",
            day: "26/08/2026"
        },

        {
            id: 7,
            imagem: "./imagens/noticia7.png",
            titulo: "Instituto tentará ajudar: o que se sabe sobre a busca de Lito por tratamento",
            descricao: "Famosos contam como Lito os ajudou a superar o medo de voar",
            day: "24/08/2026"
        },
        
        {
            id: 8,
            imagem: "./imagens/noticia8.png",
            titulo: "O que pensam os evangélicos do Rio indecisos nesta eleição",
            descricao: "1 em cada 4 candidatos: quem são forasteiros na eleição de SP?",
            day: "24/08/2026"
        },

        {
            id: 9,
            imagem: "./imagens/noticia9.png",
            titulo: "Educadora é afastada após recomendar biografias de Hitler e Mussolini",
            descricao: "Morte de professor chama atenção para uso político sobre plágio",
            day: "26/08/2026"
        },

        {
            id: 10,
            imagem: "./imagens/noticia10.png",
            titulo: "Tribunal nega recurso de motorista que recebeu R$ 131 milhões por engano",
            descricao: "Gari que devolveu dinheiro ganha música em homenagem no Rio",
            day: "26/08/2026"
        }

    ];

    return (
        <>

        <Cabecalho/>        

            <p>NOTICIAS RECENTES</p>

        <div className="card-container">

                {PostBlog.map(noticia => {
                    return <CardPostBlog 
                    key={noticia.id}
                    descricao={noticia.descricao}
                    titulo={noticia.titulo}
                    imagem={noticia.imagem} 
                    day={noticia.day} />

                })}

        </div>

        <Rodape/>

        </>
    )

}