import React , {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PokemonColection from './Components/PokemonColection'
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
  const [loading,setLoading] =useState<boolean>(true)
  const [pokemons, setPokemons] =useState< Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  useEffect(() =>{
    const getPokemon = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20offset=20")
  setNextUrl(res.data.next)

  res.data.results.forEach(async (pokemon:Pokemons) => {
           const poke = await axios.get( `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
           setPokemons((p) => [...p,poke.data])
           setLoading(false)
  })
    }
 getPokemon()
 
  },[])
 const nextPage = async() => {
  let res = await axios.get(nextUrl)
  setNextUrl(res.data.next)
  res.data.results.forEach(async(pokemon:Pokemons)=> {
    const poke= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    setPokemons((p) => [...p,poke.data])
    setLoading(true)
    
  })
 }
  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonColection pokemons={pokemons}/>
        <div className="btn">
          <button onClick={nextPage}>
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
