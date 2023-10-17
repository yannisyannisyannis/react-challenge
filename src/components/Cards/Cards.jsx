import'../Cards/Cards.css'

function Cards(props){
   
    return(
        <div className="media">
            <h2>{props.fourniture.title}</h2>
            <p>{props.fourniture.description}</p>
            <p>Prix : {props.fourniture.price}</p>
            <img src={props.fourniture.image} alt={props.fourniture.title} />
            <article>{props.fourniture.category}</article>
        </div>
    )
}
export default Cards