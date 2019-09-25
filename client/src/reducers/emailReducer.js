export default function emailReducer(
  state = {loading: false, sent: false, error: false, error_message: ""},action){
    switch (action.type) {
      case 'LOADING_EMAIL':
        return {...state, loading: true}
      case 'SENT_EMAIL':
        return {sent: true, loading:false, error: false, error_message: ""}
      case 'THROW_ERROR':
        return {...state, error: true, error_message: action.payload}
      default:
      return state
    }
  }
