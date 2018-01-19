import {
  LOADED_CATEGORIES,
  LOADED_GIF,
  LOADED_JOKE,
  LOADING_CATEGORIES,
  LOADING_GIF,
  LOADING_HOME,
  LOADING_JOKE
} from './constants';

// ACTIONS
export const loadingGif = () => ({
  type: LOADING_GIF
});

export const loadedGif = gif => ({
  type: LOADED_GIF,
  payload: gif
});

export const loadedCategories = categories => ({
  type: LOADED_CATEGORIES,
  payload: categories
});

export const loadingCategories = () => ({
  type: LOADING_CATEGORIES
});

export const loadedJokes = (joke, gif) => ({
  type: LOADED_JOKE,
  payload: {
    joke,
    gif: gif.data
  }
});

export const loadingJoke = () => ({
  type: LOADING_JOKE
});
