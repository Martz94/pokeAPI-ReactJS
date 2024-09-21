import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        Promise.all(promises).then((results) => {
          setPokemonList((prev) => [...prev, ...results]);
        });
      });
  }, [offset]);

  const addToFavorites = (pokemon) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    localStorage.setItem('favorites', JSON.stringify([...favorites, pokemon]));
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setOffset((prev) => prev + 20);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <h2 className='max-w-6xl text-3xl font-semibold text-start mx-auto mt-32 mb-10'>Pokemons</h2>
    <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} addToFavorites={addToFavorites} />
      ))}
    </div>
    </>
  );
};

export default HomePage;
