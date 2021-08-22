import React, { useEffect, useState } from "react";
import Axios from "axios";

function Crisdell() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        query('https://pokeapi.co/api/v2/pokemon?limit=151')
    }, []);

    const query = (url) => {
        setIsPending(true);
        Axios.get(url).then((res) => {
          setPokemonList(res.data.results);
          setIsPending(false);
        //   setNextLink(res.data.next);
        //   setPrevLink(res.data.previous);
        })
      }
    return (
        <div>
        <h1>HELLO My name is Crisdell</h1>
        {pokemonList.map((pokemon, index) => 
            <li key={index}>{pokemon.name}</li>    
        )}
        </div>
       
    )
}

export default Crisdell;