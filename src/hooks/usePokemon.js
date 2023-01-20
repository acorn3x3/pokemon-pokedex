import { useEffect, useState } from 'react';

import { fetchInitialPokemon, fetchTypes, fetchPokemon } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading();

    const fetchData = async () => {
      const resp = await fetchInitialPokemon();
      setIsLoading(false);
      setPokemon(resp);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setIsLoading(false);
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    const data = await fetchPokemon(type);
    setIsLoading(false);
    setPokemon(data);
  };

  return { pokemon, types, handleTypeChange, isLoading };
}
