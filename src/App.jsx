import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import info from './Cardsinfo'
function App() {
  const cardsList = info.map(element => (
    <Cards 
      key={element.name}
      name={element.name}
      cuisine={element.cuisine}
      menu={element.menu}
    />
  ))
  
  return (
    <div className = "page"> 
    <h1>Food Truck Favorites </h1>
    <div className="cards-format">
    {cardsList}
    </div>
    </div>
  )
}

export default App
