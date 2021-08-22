import './App.css';
import Axios from 'axios';
import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

import PokemonItem from './PokemonItem';
import PokemonDetail from './PokemonDetail';

import NavigationBar from './NavigationBar';
import StarWidget from './StarWidget';

function App() {
  const title ="Crisdell's Pokedex"

  const [pokemonList, setPokemonList] = React.useState([]);
  const [starList, setStarList] = React.useState([]);
  const [caughtList, setCaughtList] = React.useState([]);
  const [activeName, setActiveName] = React.useState(false);
  const [isPending, setIsPending] = React.useState(true);
  const [nextLink, setNextLink] = React.useState(null);
  const [prevLink, setPrevLink] = React.useState(null);
  const [page, setPage] = React.useState(1);

  const query = (url) => {
    setIsPending(true);
    Axios.get(url).then((res) => {
      setPokemonList(res.data.results);
      setIsPending(false);
      setNextLink(res.data.next);
      setPrevLink(res.data.previous);
    })
  }

  const  handleClickNext = () => {
    query(nextLink);
    setPage (page+1);
  }

  const  handleClickPrev = () => {
    if (page === 1) {
      return false;
    }
    query(prevLink);
    setPage (page-1);
  }

  const handleClickAction = (action, pokemon) => {
   if (action === 'star') {
     setStarList([...starList, pokemon])
   } else if (action === 'unstar') {
     let list = starList.filter((star) => star.name != pokemon.name);
     setStarList([...list])
   } else if (action === 'view') {
     setActiveName(pokemon.name);
   } else if (action === 'catch') {
       setCaughtList([...caughtList, pokemon])
   }
  }

  const isCaught = (name) => {
      return caughtList.filter((pokemon) => pokemon.name === name).length > 0;
  }

  React.useEffect(() => {
    query('https://pokeapi.co/api/v2/pokemon?limit=151')
  }, []);

  return (
  
      <div className="App">
      <NavigationBar title={title}></NavigationBar>
      
      <div className="dashboard">
        <div className="pokemon-left">
          <div className="top-bar">
          <div className="paging">
            <button className="paging-prev" onClick={handleClickPrev}>Prev</button>
            <span className="paging-current">{page}</span>
            <button className="paging-prev" onClick={handleClickNext}>Next</button>
          </div>
          <div className="widgets">
            <StarWidget starList={starList} action={handleClickAction} />
          </div>
        </div>
          <div className="pokemon-list">
            {isPending && <h1>Loading...</h1> }
            {!isPending && pokemonList.map((pokemon, index) => 
              <PokemonItem pokemon={pokemon} key={index} action={handleClickAction} starList={starList} caughtList={caughtList}/>
            )}
          </div>
        </div>
        <div className="pokemon-side">
            {!activeName &&
             <div style={{
                 position: 'sticky',
                 top: '5px'
             }}>
                <h1>Welcome to my Pokedex</h1>
                <h3>This is a sample application using Gatsby</h3>
                <StaticImage
                src="./images/gatsby-icon.png"
                width={120}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
                />
                <StaticImage
                src="./images/logo192.png"
                width={120}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="React logo"
                style={{ marginBottom: `1.45rem` }}
                />
                <h4>Created by CJ.INES@OUTLOOK.PH</h4>
            </div>
            }
            {activeName &&
                <PokemonDetail name={activeName}/>
            }
        </div>
      </div>
     
    </div>

  );

  
}

export default App;
