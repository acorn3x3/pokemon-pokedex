import { useEffect, useState } from 'react';

import { fetchInitialPokemon } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchInitialPokemon();
      setPokemon(resp);
    };
    fetchData();
  }, []);
  return pokemon;
}
