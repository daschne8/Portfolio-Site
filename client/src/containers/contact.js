import React,{Component} from 'react'
import {connect} from 'react-redux'

import {sendEmail} from '../actions/emailAction'


class Contact extends Component{
  state = {
    email:"",
    subject:"",
    desc:""
  }

  handleOnChange = event => {
    event.persist()
    console.log(event);
    switch (event.target.id) {
      case "subject":
        this.setState({...this.state, subject: event.target.value})
        break;
      case "email":
        this.setState({...this.state, email: event.target.value})
        break;
      case "desc":
        this.setState({...this.state, desc: event.target.value})
        break;
    }
  }

  handleOnSubmit = event =>{
    event.preventDefault()
    this.props.sendEmail(this.state.email, this.state.subject, this.state.desc)
    this.setState({
      email:"",
      subject:"",
      desc:""
    })
  }

  render(){
    return(
      <div className="contact-page">
      <div style={{flex: '1'}}></div>
      <div className="contact-form" >
        {this.props.error ? <h4>{this.props.error_message}</h4> : null}
        <form onSubmit={ event => this.handleOnSubmit(event)}>
        <input type="text" placeholder="Email (required)" id="email" value={this.state.email} onChange={event => this.handleOnChange(event)}/>
          <input type="text" placeholder="Subject (required)" id="subject" value={this.state.subject} onChange={event => this.handleOnChange(event)}/>
          <textArea placeholder="Description (required)" id="desc" onChange={event => this.handleOnChange(event)}>{this.state.desc}</textArea>
          <button type="submit">Contact</button>
        </form>
      </div>
      <div style={{flex: '1'}}></div>
      </div>
    )
  }
}

const mapStateToProps = ({email}) =>({
  error: email.error,
  error_message: email.error_message
})

const mapDispatchToProps = dispatch =>({
  sendEmail: (email,subject,description) => dispatch(sendEmail(email,subject,description))
})

export default connect(mapStateToProps,mapDispatchToProps)(Contact)
