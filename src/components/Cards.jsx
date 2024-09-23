import React from "react";
import './Cards.css'

const Cards = (props) => { 
    const {name, cuisine, menu} = props
    return(
        <div className="cards-list">  
           <p className="card-name">{name}</p>
           <p className="card-cuisine">{cuisine}</p>
           <button className="btn"><a href ={menu}>View Menu</a></button>
        </div>
    )
} 


export default Cards;