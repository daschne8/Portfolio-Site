export function sendEmail(email, description, subject){
  return(dispatch) => {
    const url = `/api/v1/emails?e=${email}&d=${description}&s=${subject}`
    dispatch({type: "LOADING_EMAIL"})
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Sorry something went wrong, you can contact me at daniel.j.schneider88@gmail.com")
        }})
        .then(data => {
          dispatch({type: "SENT_EMAIL"})
        })
        .catch((err) => {
          dispatch({type: "THROW_ERROR"})
        })
  }
}
