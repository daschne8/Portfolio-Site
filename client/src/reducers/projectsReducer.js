export default function projectsReducer(
  state = {loading: false, projects: [], error: false, error_message: ""},action){
    switch (action.type) {
      case 'LOADING_PROJECTS':
        return {...state, loading: true}
      case 'FETCH_PROJECTS':
        return {...state, loading:false, error: false, projects: action.payload}
      case 'THROW_ERROR':
        return {...state, error: true, error_message: action.payload}
      default:
      return state
    }
  }
