import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";


function PokemonDetail({ name}) {

    const [pokemon, setPokemon] = useState(false);
    const [isPending, setIsPending] = useState(true);

    //const { name} = useParams();

    useEffect(() => {
        setIsPending(true);
        Axios.get('https://pokeapi.co/api/v2/pokemon/' + name).then((res) => {
            setPokemon(res.data);
            console.log(res.data);
            setIsPending(false);
        })
    }, [name]);

    
    return (
        <div className="pokemon-detail" >
            <div className="pokemon-detail-head">
                <h2>{ name }</h2>
                {!isPending && 
                    <div className="pokemon-types">
                        {pokemon && 
                            pokemon.types.map((type, index) => <span key={index} className={`type-${type.type.name}`}>{type.type.name}</span>)
                        }
                    </div>
                }
            </div>
            
            {!isPending && 
            <div className="pokemon-portrait-stat">
                <div>
                    <img className="pokemon-portrait" src={pokemon.sprites.other['official-artwork'].front_default} alt={name} />
                </div>
                <div className="pokemon-stats">
                    {pokemon.stats.map((stat, index) => 
                        <div className="pokemon-stat" key={index}> <span>{stat.stat.name}</span> <strong>{stat.base_stat}</strong> </div>
                    )}
                    <div className="pokemon-abilities">
                        Abilities:
                        {pokemon && 
                            pokemon.abilities.map((ability, index) => <span key={index}>{ability.ability.name}</span>)
                        }
                    </div>
                </div>
            </div>
            }
            { !isPending &&
                <div className="pokemon-moves">
                    { pokemon.moves.map((move, index) => 
                        <div key={index} className="pokemon-move">{move.move.name}</div>
                    )}
                </div>
            }

            { isPending && <h1>Loading...</h1> }
            
        </div>
    )
}

export default PokemonDetail;