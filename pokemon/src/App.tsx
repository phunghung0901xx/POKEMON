import React , {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
interface  Pokemon {
  id:number,
  name:string,
  sprites : {
    front_default:string
  }
}
interface Pokemons {
  name: string;
  url:string
}
const  App:React.FC = () => {
  const [pokemons, setPokemons] =useState< Pokemon[]>([]);
  useEffect(() =>{
    const getPokemon = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20offset=20")

  res.data.results.forEach(async (pokemon:Pokemons) => {
           const poke = await axios.get( `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
           setPokemons((p) => [...p,poke.data])
  })
    }
 getPokemon()
  },[])
  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
      </div>
    </div>
  );
}

export default App;
