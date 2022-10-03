import React from 'react'
import './Pokemon.css'
interface Props {

    name:string,
    image:string,
    id:number
}
const PokemonList:React.FC<Props> = (props) => {
    const {name,id,image} = props
  return (
    <div>
     <section className="pokemon-list-container">
        <p className="pokemon-name">{name}</p>
        <img src={image} alt="pokemon" />
     </section>
    </div>
  )
}

export default PokemonList

