import './App.css';
import './PokemonCard';
import {useState} from 'react';
import Form from './Form.js'; 
import PokemonGrid from './PokemonGrid';

function App() {
  const [pokemon, setPokemon] = useState("");
  const [images, setImages] = useState([]);
 
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formattedPokemon = pokemon.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formattedPokemon}/`, {
      method: 'GET',
    });
    if (!response.ok) {
      alert(`Could not find pokemon ${formattedPokemon}`);
      return;
    } 
    const result = await response.json();
    const temp = []
    for (const [key, value] of Object.entries(result.sprites)) {
      if (value !== null && key !== 'other' && key !== 'versions') {
        temp.push(value);
      }
    }
    console.log(temp);
    setImages(temp);
  }

  function onChange(e) {
    setPokemon(e.target.value)
  }

  return (
    <div className="App">
      <h1> Pokemon finder! </h1>
      <Form handleSubmit={handleSubmit} onChange={onChange}/>
      {
      images ? 
        (<PokemonGrid images={images}/>) :
        (<div></div>)
      } 
    </div>
  );
}

export default App;
