const API_URL = 'https://api.chucknorris.io/jokes';

export const getCategories = () => fetch(`${API_URL}/categories`);

export const getRandomJoke = () => fetch(`${API_URL}/random`);

export const getJokeByCategory = category => fetch(`${API_URL}/random?category={${category}}`);

export const searchJokes = query => fetch(`${API_URL}/search?query={${query}}`);
