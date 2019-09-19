import React,{Component} from 'react'

import PersonalCard from './personal_card'
import Bio from '../components/bio'

export default class Home extends Component{
  render(){
    return(
      <div className="home-page">
        <div style={{flex: '1'}}></div>
        <div className="per-bio" style={{flex:7}}>
          <PersonalCard/>
          <Bio />
        </div>
        <div style={{flex: '1'}}></div>
      </div>
    )
  }
}
