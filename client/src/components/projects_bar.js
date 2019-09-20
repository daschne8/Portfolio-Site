import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchProjects} from '../actions/projectsAction'

class ProjectsBar extends Component{


  render(){
    let projList = this.props.projects.map(proj =>
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

const mapStateToProps = (state) =>({
  section: state.page.section,
  projects: state.projects.projects
})

const mapDispatchToProps = dispatch =>({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps,mapDispatchToProps)(ProjectsBar)
