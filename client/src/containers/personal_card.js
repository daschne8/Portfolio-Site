import React,{Component} from 'react'

import {ReactComponent as GitIcon} from '../icons/github.svg'
import {ReactComponent as BlogIcon} from '../icons/blog.svg'
import {ReactComponent as LinkedIcon} from '../icons/linkedin.svg'
import {ReactComponent as ResumeIcon} from '../icons/resume.svg'
import personalPic from '../data/personal_pic.jpg'


export default class PersonalCard extends Component{
  render(){
    return(
      <div className="personal-card">
        <h2>Daniel Schneider</h2>
        <h4>Full Stack Web Developer</h4>
        <img className="personal-pic" src={personalPic} alt="personal pic"/>
        <div className="social-links">
          <a href="https://github.com/daschne8"><GitIcon className="icon" style={{fill: "#7ebc59"}}/></a>
          <a href="https://daschne8.github.io/"><BlogIcon className="icon"/></a>
          <a href="https://www.linkedin.com/in/daniel-schneider-00b09088/"><LinkedIcon className="icon"/></a>
          <a href="https://drive.google.com/open?id=11Dzx3nEpcQ6GR-SMFF4HrIbs5cjg94N-AckAiyuCuGA"><ResumeIcon className="icon" fill="#7ebc59"/></a>
        </div>


      </div>
    )
  }
}
