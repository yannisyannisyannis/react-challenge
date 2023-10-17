import { useState } from 'react'
import './App.css'
import CardList from './components/CardList/CardList'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import data from'./data/data.json'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    
  {CardList.title.filter(title => title.includes('nom')).map(filteredTitle => (
    <li>
      <button>{filteredTitle}</button>
    </li>
    <li>
      <button>{filteredPrice}</button>
    </li>
    <li>
    <button>{filteredCategory}</button>
  </li>
  ))}

        
      
      <h1>Galere.com</h1>
      <Navbar chaud/>
     
      <Footer/>

      {data.map((fourniture) => {
      return (<div key={fourniture.id}>
        <CardList fournitures1={data} />
      </div>)
      })}
      
      
    </>
  )
}

export default App
