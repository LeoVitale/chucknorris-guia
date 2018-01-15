
const LOADING_HOME = 'chuck/home/LOADING_HOME';
const LOADING_CATEGORIES = 'chuck/home/LOADING_CATEGORIES';

const initialState = {
  loadingHome: false,
  categories: [],
  loadingCategories:false
}

export default (state = initialState, action) => {

  switch (action.type) {

    case LOADING_HOME:
      return {
        ...state,
        loadingHome: true
      }
    default:
      return state
  }

}
