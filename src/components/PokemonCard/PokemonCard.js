import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="PokemonCard">
      <div className="pokemon">{pokemon}</div>
      {/* <div className="_id">{_id}</div>
      <div className="id">{id}</div>
      <image src={`http://www.pokemon.com/us/pokedex/${pokemon}`}></image> */}
    </div>
  );
}
