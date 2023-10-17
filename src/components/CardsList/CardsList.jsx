
import data from "../../data/data.json";
import Card from '../Card/Card'
import"./cardsList.css" 

function CardsList() {
    

    
    return (   
        <>
            {data.map((article,index) => (
                <div key= {article.id} className="container" > 
                  <Card data= {article}/>
                </div>
            ))} 
        </>   
    )
}

export default CardsList