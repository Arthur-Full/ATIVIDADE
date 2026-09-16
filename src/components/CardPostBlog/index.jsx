import "./cardPostBlog.css"

export default function CardPostBlog ({imagem, titulo, descricao, day}) {
    
    return(
        <div className="card-wrap"> 
        
          <img src= {imagem} alt="" />
          <h2>{titulo}</h2>
          <p>{descricao}</p>
          <p>{day}</p>

        </div>
    )
}