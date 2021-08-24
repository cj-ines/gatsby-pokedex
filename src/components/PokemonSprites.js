import React from 'react';

function PokemonSprites({ name, sprites }) {
    console.log(sprites);
    return (
        <div>
            <img src={sprites.front_default} />
            <img src={sprites.back_default} />
        </div>
    )
}

export default PokemonSprites;