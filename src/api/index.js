const API_URL = 'https://api.chucknorris.io/jokes';

export const getCategories = () => fetch(`${API_URL}/categories`).then(response => response.json());

export const getRandomJoke = () => fetch(`${API_URL}/random`).then(response => response.json());

export const getJokeByCategory = category => fetch(`${API_URL}/random?category={${category}}`).then(response => response.json());

export const searchJokes = query => fetch(`${API_URL}/search?query={${query}}`).then(response => response.json());

export const getChuckNorrisGif = () => fetch('https://api.giphy.com/v1/gifs/random?api_key=L2SvTcHAOpdfbn16XP5v5DVBvNTEd1zl&tag=chuck%20norris').then(response => response.json());
