import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

function AboutAuthor() {
    return (
        <div style={{
            position: 'sticky',
            top: '5px'
        }}>
           <h1>Welcome to my Pokedex</h1>
           <p>This is a sample application using Gatsby</p>
           <p>This pages uses the PokeApi <a href="https://pokeapi.co">http://pokeapi.co</a></p>
             <StaticImage
             src="../images/gatsby-icon.png"
             width={120}
             quality={95}
             formats={["AUTO", "WEBP", "AVIF"]}
             alt="A Gatsby astronaut"
             style={{ marginBottom: `1.45rem` }}
             />
             <StaticImage
             src="../images/logo192.png"
             width={120}
             quality={95}
             formats={["AUTO", "WEBP", "AVIF"]}
             alt="React logo"
             style={{ marginBottom: `1.45rem` }}
             />
           <h4>Created by CJ.INES@OUTLOOK.PH</h4>
       </div>
    )
}

export default AboutAuthor;