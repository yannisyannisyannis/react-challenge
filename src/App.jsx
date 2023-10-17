import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./data/data.json"
import CardList from './components/CardsList/CardsList.jsx'


function App() {

  const [count, setCount] = useState(0)


console.log(data)

  return (
    < main className='fghj'>
      <CardList/>
    </main>
  )
}

export default App


