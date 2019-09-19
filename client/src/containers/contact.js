import React,{Component} from 'react'

export default class Contact extends Component{
  state = {
    name:"",
    email:"",
    desc:""
  }

  handleOnChange = event => {
    event.persist()
    console.log(event);
    switch (event.target.id) {
      case "name":
        this.setState({...this.state, name:event.target.value})
        break;
      case "email":
        this.setState({...this.state, email:event.target.value})
        break;
      case "desc":
        this.setState({...this.state, desc:event.target.value})
        break;
    }
  }

  handleOnSubmit = event =>{
    event.preventDefault()
  }

  render(){
    return(
      <div className="contact-page">
      <div style={{flex: '1'}}></div>
      <div className="contact-form" >
      <a href="daniel.j.schneider88@gmail.com">Daniel.J.Schneider88@Gmail.com</a>
        <form onSubmit={ event => this.handleOnSubmit(event)}>
          <input type="text" placeholder="Name (required)" id="name" value={this.state.name} onChange={event => this.handleOnChange(event)}/>
          <input type="text" placeholder="Email (required)" id="email" value={this.state.email} onChange={event => this.handleOnChange(event)}/>
          <textArea placeholder="Description (required)" id="desc" value={this.state.description} onChange={event => this.handleOnChange(event)}/>
          <button type="submit">Contact</button>
        </form>
      </div>
      <div style={{flex: '1'}}></div>
      </div>
    )
  }
}
