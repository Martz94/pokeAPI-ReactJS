export const getFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  } catch (error) {
    console.error('Error al obtener favoritos:', error);
    return [];
  }
};

export const addToFavorites = (pokemon) => {
  try {
    const favorites = getFavorites();
    if (!favorites.some(fav => fav.id === pokemon.id)) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, pokemon]));
    }
  } catch (error) {
    console.error('Error al agregar a favoritos:', error);
  }
};

export const removeFromFavorites = (pokemonId) => {
  try {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(fav => fav.id !== pokemonId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Error al eliminar de favoritos:', error);
  }
};
