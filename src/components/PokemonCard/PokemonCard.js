import React from 'react';
import './PokemonCard.css';
import Sword from '../../../src/attackIcon.png';
import Shield from '../../../src/shieldIcon.png';
import Health from '../../../src/heartIcon.png';

export default function PokemonCard({ pokemon, hp, attack, defense, url_image, type_1, type_2 }) {
  return (
    <div className="PokemonCard">
      <div>
        <p className="pokemon">{pokemon}</p>
        <img src={url_image} style={{ height: '100px', width: 'auto' }} />
      </div>
      <span className="health">
        <img src={Health} style={{ height: '17px', width: '17px' }} />
        <p className="health">{hp}</p>
      </span>
      <div className="fighting">
        <span className="attack">
          <img src={Sword} style={{ height: '15px', width: '15px' }} />
          <p className="attack">{attack} </p>
        </span>
        <span className="defense">
          <img src={Shield} style={{ height: '15px', width: '15px' }} />
          <p className="defense">{defense}</p>
        </span>
      </div>
      <p className="type_1">
        Type 1: {type_1}, Type 2: {type_2}
      </p>
    </div>
  );
}
