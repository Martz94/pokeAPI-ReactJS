export const fetchPokemons = async (offset) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    const data = await response.json();
  
    const pokemonDetails = await Promise.all(
      data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
    );
  
    return pokemonDetails;
  };
  