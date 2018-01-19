import {
  loadedCategories,
  loadedGif,
  loadedJokes,
  loadingCategories,
  loadingGif,
  loadingJoke } from './actions';

import {
  LOADED_CATEGORIES,
  LOADED_GIF,
  LOADED_JOKE,
  LOADING_CATEGORIES,
  LOADING_GIF,
  LOADING_HOME,
  LOADING_JOKE
} from './constants';

import {
  getCategories,
  getRandomJoke,
  getChuckNorrisGif,
  getJokeByCategory
} from 'services';

const initialState = {
  loadingHome: false,
  categories: [],
  loadingCategories: false,
  joke: {},
  loadingJoke: false,
  gif: {},
  loadingGif: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_HOME:
      return {
        ...state,
        loadingHome: true
      };
    case LOADING_CATEGORIES:
      return {
        ...state,
        loadingCategories: true
      };
    case LOADED_CATEGORIES:
      return {
        ...state,
        loadingCategories: false,
        categories: action.payload
      };
    case LOADING_JOKE:
      return {
        ...state,
        loadingJoke: true
      };
    case LOADED_JOKE:
      return {
        ...state,
        loadingJoke: false,
        joke: action.payload.joke,
        gif: action.payload.gif
      };
    default:
      return state;
  }
};

// ACTIONS CREATORS
export function loadChuckNorrisGif() {
  return dispatch => {
    dispatch(loadingGif());
    getChuckNorrisGif()
      .then(result => {
        dispatch(loadedGif(result));
      });
  };
}

export function loadCategories() {
  return dispatch => {
    dispatch(loadingCategories());
    getCategories()
      .then(result => {
        dispatch(loadedCategories(result));
      });
  };
}

export const loadRadomJoke = () => dispatch => {
  dispatch(loadingJoke());
  Promise.all([getRandomJoke(), getChuckNorrisGif()])
    .then(([joke, gif]) => {
      dispatch(loadedJokes(joke, gif));
    });
};

export function loadCategoryJoke(category) {
  return dispatch => {
    dispatch(loadingJoke());
    Promise.all([getJokeByCategory(category), getChuckNorrisGif()])
      .then(([joke, gif]) => {
        dispatch(loadedJokes(joke, gif));
      });
  };
}
