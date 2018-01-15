
const LOADING_HOME = 'chuck/home/LOADING_HOME';


const initialState = {
  loadingHome: false
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
