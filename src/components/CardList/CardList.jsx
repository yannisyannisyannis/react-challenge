
import './cardList.css'
import Cards from '../Cards/Cards'



function CardList({fournitures1}) {
 

    
    return(
        fournitures1.map((fourniture)=> {
            return (
                <div className="fournitures"key={fourniture.id}>
                    <Cards fourniture={fourniture}/>
                </div>
            )
        }
    ))
}

export default CardList