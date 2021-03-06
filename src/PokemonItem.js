import React from "react";

function PokemonItem({pokemon, action, viewing, starList, caughtList}) {

    const active = starList.filter((star) => star.name == pokemon.name).length > 0;
    const caughtNumber = caughtList.filter((caught) => caught.name == pokemon.name).length;
    const caught = caughtNumber > 0;

    return (
        <div className={'pokemon' + (active? ' pokemon-active': '') + (caught ? ' pokemon-caught' : '')}>
            <div className="pokemon-head">
                <div className="pokemon-head-name">
                    { pokemon.name }
                    <div className="pokemon-head-icons">
                    { active &&
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    }
                    { caught &&
                        <div style={{marginLeft: '10px', display:'flex', alignItems: 'center', gap: '5px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {caughtNumber}
                        </div>
                    }
                    </div> 
                </div>
            </div>
            <div className={'icon-sprite-container' + (viewing === pokemon.name ? ' -active' : '')}>
                <img className="icon-sprite" src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon.name}.png`} alt={`${pokemon.name} icon`}></img>
            </div>
            
            <div className="pokemon-actions">
                <a onClick={()=> action('catch', pokemon)}>
                    Catch
                </a>
                <a onClick={()=> action('view', pokemon)}>
                    View
                </a>
                {!active && 
                <a onClick={()=> action('star', pokemon)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    star
                </a>
                }
                {active && 
                <a onClick={()=> action('unstar', pokemon)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    unstar
                </a>
                }
            </div>
        </div>
    )
}

export default PokemonItem;