import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({ pokemon, hp, attack, defense, url_image }) {
  return (
    <div className="PokemonCard">
      <p className="pokemon">{pokemon}</p>
      <img src={url_image} style={{ height: '100px', width: 'auto' }} />
      <div className="hp">HP: {hp}</div>
      <div className="attack">Attack: {attack}</div>
      <div className="defense">Defense: {defense}</div>
    </div>
  );
}
