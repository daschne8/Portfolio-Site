export function fetchProjects(){
  return(dispatch) => {
    dispatch({type: 'LOADING_PROJECTS'})
    fetch('api/v1/projects')
    .then(res => {
      if (res.ok) {
        return res.json()
      }else {
        throw new Error("Trouble getting project data")
      }
    })
    .then(data => {
      const projects = data
      dispatch({type:'FETCH_PROJECTS', payload: projects})
    })
    .catch(err => {
      console.log("error ",err);
      dispatch({type: 'THROW_ERROR', payload: err})
    })
  }
}
