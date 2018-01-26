import {
  getCategories,
  getRandomJoke,
  getChuckNorrisBackground,
  getJokeByCategory
} from 'services';

export const LOADING_HOME = 'chuck/home/LOADING_HOME';

export const LOADING_CATEGORIES = 'chuck/home/LOADING_CATEGORIES';
export const LOADED_CATEGORIES = 'chuck/home/LOADED_CATEGORIES';
export const FAILED_CATEGORIES = 'chuck/home/FAILED_CATEGORIES';

export const LOADING_JOKE = 'chuck/home/LOADING_JOKE';
export const LOADED_JOKE = 'chuck/home/LOADED_JOKE';
export const FAILED_JOKE = 'chuck/home/FAILED_JOKE';


const initialState = {
  loadingHome: false,
  categories: [],
  loadingCategories: false,
  errorCategories: false,
  joke: {},
  loadingJoke: false,
  errorJoke: false,
  background: {}
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
        categories: action.payload,
        errorCategories: false
      };
    case FAILED_CATEGORIES:
      return {
        ...state,
        errorCategories: true,
        loadingCategories: false
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
        background: action.payload.background
      };
    case FAILED_JOKE:
      return {
        ...state,
        errorJoke: true,
        loadingJoke: false
      };
    default:
      return state;
  }
};

// ACTIONS CREATORS - SIDE EFFECTS
export function loadCategories() {
  return dispatch => {
    dispatch(loadingCategories());
    getCategories()
      .then(result => dispatch(loadedCategories(result)))
      .catch(error => dispatch(failedCategories()));
  };
}

export const loadRadomJoke = () => dispatch => {
  dispatch(loadingJoke());
  Promise.all([getRandomJoke(), getChuckNorrisBackground()])
    .then(([joke, background]) => dispatch(loadedJokes(joke, background)))
    .catch(error => dispatch(failedJoke()));
};

export function loadCategoryJoke(category) {
  return dispatch => {
    dispatch(loadingJoke());
    Promise.all([getJokeByCategory(category), getChuckNorrisBackground()])
      .then(([joke, background]) => dispatch(loadedJokes(joke, background)))
      .catch(error => dispatch(failedJoke()));
  };
}

// ACTIONS
export const loadingCategories = () => ({
  type: LOADING_CATEGORIES
});

export const loadedCategories = categories => ({
  type: LOADED_CATEGORIES,
  payload: categories
});

export const failedCategories = () => ({
  type: FAILED_CATEGORIES
});

export const loadingJoke = () => ({
  type: LOADING_JOKE
});

export const loadedJokes = (joke, background) => ({
  type: LOADED_JOKE,
  payload: {
    joke,
    background: background.data
  }
});

export const failedJoke = () => ({
  type: FAILED_JOKE
});
