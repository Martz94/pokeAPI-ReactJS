import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import { fetchPokemons } from '../utils/FetchPokemon';
import { addToFavorites } from '../utils/LocalStorage';
import { useInfiniteScroll } from '../utils/InfiniteScroll';

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null); 

  useInfiniteScroll(() => setOffset((prev) => prev + 20));

  useEffect(() => {
    const loadPokemons = async () => {
      try {
      const newPokemons = await fetchPokemons(offset);
      setPokemonList((prev) => {
        const existingIds = new Set(prev.map(p => p.id));
        return [...prev, ...newPokemons.filter(p => !existingIds.has(p.id))];
      });
    } catch (error) {
      setError('Hubo un problema al cargar los Pokémon')
    }
    };
    loadPokemons();
  }, [offset]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>; 
  }

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name && pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='mt-36 block sm:flex max-w-6xl mx-auto justify-between items-center gap-10'>
        <h2 className='text-3xl font-semibold text-left ps-4 my-5'>Pokemones</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="container mt-10 max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} addToFavorites={addToFavorites} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

