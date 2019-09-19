import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

export default class NavBar extends Component{

  handleOnClick = event =>{
    return false
  }

  render(){
    return(
      <nav className="nav-bar">
        <NavLink to="/" onClick={event => this.handleOnClick(event)} className="nav-link">Home</NavLink>
        <NavLink to="/contact" onClick={event => this.handleOnClick(event)} className="nav-link" >Contact</NavLink>
        <NavLink to="/projects" onClick={event => this.handleOnClick(event)} className="nav-link" >Projects</NavLink>
      </nav>
    )
  }
}
