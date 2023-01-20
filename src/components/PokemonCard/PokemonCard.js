import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({ pokemon, hp, attack, defense, url_image, type_1, type_2 }) {
  return (
    <div className="PokemonCard">
      <p className="pokemon">{pokemon}</p>
      <img src={url_image} style={{ height: '100px', width: 'auto' }} />
      <div className="hp">HP: {hp}</div>
      <div className="attack">Attack: {attack}</div>
      <div className="defense">Defense: {defense}</div>
      <div className="type_1">Type 1: {type_1}</div>
      <div className="type_2">Type 2: {type_2}</div>
    </div>
  );
}
