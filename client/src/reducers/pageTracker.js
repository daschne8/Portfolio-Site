export default function pageTracker(
  state = {section: 1},action){
    switch (action.type) {
      case 'SET_SCROLL':
        return {section: action.section}
      default:
        return state

    }
  }
