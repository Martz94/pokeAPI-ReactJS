export const fetchPokemons = async (offset) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    if (!response.ok) throw new Error('Error al obtener los datos de Pokémon');

    const data = await response.json();
    const pokemonDetails = await Promise.all(
      data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
    );

    return pokemonDetails;
  } catch (error) {
    console.error('Error en fetchPokemons:', error);
    return [];
  }
};
  