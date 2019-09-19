import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as PJS from "../data/projects"


class ProjectsBar extends Component{
  state = {
    projects: []
  }

  componentDidMount = () =>{
    this.setState({
      projects: PJS.ProjectsData
    })
  }

  render(){
    let projList = this.state.projects.map(proj =>
        <a href={"#section-"+proj.id}  id={proj.id} key={proj.id} className='proj-link'>
          <div className={(proj.id === this.props.section) ? 'activeP' : 'inactiveP'}>{proj.nav_title}</div>
        </a>
    )

    return(
      <div className="projects-bar" >
      <h3 style={{padding: '0 0 0 10px'}}>Projects:</h3>
        {projList}
      <div style={{height: '10px'}}></div>
      </div>
    )
  }
}

const mapStateToProps = ({page}) =>({
  section: page.section
})

export default connect(mapStateToProps)(ProjectsBar)
