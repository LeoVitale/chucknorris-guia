import {
  getCategories,
  getRandomJoke,
  getChuckNorrisGif
} from 'services';
import {
  Z_DEFAULT_COMPRESSION
} from 'zlib';

const LOADING_HOME = 'chuck/home/LOADING_HOME';
const LOADING_CATEGORIES = 'chuck/home/LOADING_CATEGORIES';
const LOADED_CATEGORIES = 'chuck/home/LOADED_CATEGORIES';

const LOADING_JOKE = 'chuck/home/LOADING_JOKE';
const LOADED_JOKE = 'chuck/home/LOADED_JOKE';

const LOADED_GIF = 'chuck/home/LOADED_GIF';
const LOADING_GIF = 'chuck/home/LOADING_GIF';

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


export function loadChuckNorrisGif() {
  return dispatch => {
    dispatch({
      type: LOADING_GIF
    });
    getChuckNorrisGif()
      .then(result => {
        dispatch({
          type: LOADED_GIF,
          payload: result
        });
      });
  };
}

export function loadCategories() {
  return dispatch => {
    dispatch({
      type: LOADING_CATEGORIES
    });
    getCategories()
      .then(result => {
        dispatch({
          type: LOADED_CATEGORIES,
          payload: result
        });
      });
  };
}

export function loadRadomJoke() {
  return dispatch => {
    dispatch({
      type: LOADING_JOKE
    });
    Promise.all([getRandomJoke(), getChuckNorrisGif()])
      .then(([joke, gif]) => {
        dispatch({
          type: LOADED_JOKE,
          payload: { joke, gif: gif.data }
        });
      });
  };
}
