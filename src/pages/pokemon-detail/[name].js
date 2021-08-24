import React from 'react';
import Layout from '../../components/layout';
import PokemonDetail from '../../PokemonDetail';
import PokemonSprites from '../../components/PokemonSprites';

function PokemonDetailPage(props) {

    const name = props.params.name;

    return (
        <Layout>
            <PokemonDetail name={name} fullDetail={true} />
        </Layout>
    )
}

export default PokemonDetailPage;