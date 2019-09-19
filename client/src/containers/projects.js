import React,{Component} from 'react'
import ProjectsBar from '../components/projects_bar'
import ProjectCard from '../components/project_card'
import * as PJS from "../data/projects"
import {connect} from "react-redux"
import {fetchProjects} from '../actions/projectsAction'


class Projects extends Component{

  componentDidMount = () => {
    this.props.fetchProjects()
  }

  render(){
    let projectCards = this.props.projects.map((proj,idx) => (
      <ProjectCard
        key={proj.id}
        id={proj.id}
        title={proj.title}
        github={proj.github_url}
        video={proj.youtube_id}
        blog={proj.blug_url}
        about={proj.description}
        />
      )
    )
    return(
      <div className="projects-page" id="projects-scroll">
        <ProjectsBar />
        <div className="projects-holder">
          {projectCards}

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({projects}) =>({
  projects: projects.projects
})

const mapDispatchToProps = dispatch =>({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps,mapDispatchToProps)(Projects)
