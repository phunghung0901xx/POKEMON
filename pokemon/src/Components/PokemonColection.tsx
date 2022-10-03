import React from 'react'
import {Pokemon} from '../Interface'
import PokemonList from './PokemonList'
import './Pokemon.css'
interface Props {
    pokemons :Pokemon[]
}
const PokemonColection:React.FC<Props> = (props) => {
    const {pokemons} = props
  return (
    <div>
      <div className="collection-container">
        {pokemons.map((pokemon)=>{
            return (
              <PokemonList 
              key={pokemon.id}
              image = {pokemon.sprites.front_default}
              name={pokemon.name}
              id={pokemon.id
            }
              />
            )
        })}
      </div>
    </div>
  )
}

export default PokemonColection

