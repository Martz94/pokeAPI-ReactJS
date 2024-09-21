export const getFavorites = () => JSON.parse(localStorage.getItem('favorites')) || [];

export const addToFavorites = (pokemon) => {
  const favorites = getFavorites();
  if (!favorites.some(fav => fav.id === pokemon.id)) {
    localStorage.setItem('favorites', JSON.stringify([...favorites, pokemon]));
  }
};

export const removeFromFavorites = (pokemonId) => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(fav => fav.id !== pokemonId);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};
