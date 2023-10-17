import "./cards.css"

function Card({data}) {
    

    return (
        <article className="article">    
        <h1>{data.title}</h1>,
        <p>{data.description}, 
            {data.price}</p> 
            <img src={data.image} className="images"/>
            <article> {data.category} </article>
        </article>
    )
}




export default Card