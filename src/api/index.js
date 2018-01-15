const API_URL = 'https://api.chucknorris.io/jokes';

export const getCategories = () => {
  return fetch(`${API_URL}/categories`);
}

export const getRandomJoke = () => {
  return fetch(`${API_URL}/random`);
}

export const getJokeByCategory = (category) => {
  return fetch(`${API_URL}/random?category={${category}}`);
}

export const searchJokes = (query) => {
  return fetch(`${API_URL}/search?query={${query}}`);
}
