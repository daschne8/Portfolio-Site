import React,{Component} from 'react';
import {ReactComponent as GitIcon} from '../icons/github.svg';
import {ReactComponent as BlogIcon} from '../icons/blog.svg';
import YouTube from 'react-youtube';
import {connect} from 'react-redux'
import {sectionAction} from '../actions/pageAction'

class ProjectCard extends Component{


  componentDidMount = () =>{
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount = () =>{
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = event =>{
    let element = document.getElementById("section-"+this.props.id)
    let fromTop = 0;
    while (element) {
      fromTop += (element.offsetTop - element.scrollTop + element.clientTop)
      element = element.offsetParent
    }
    fromTop -= window.pageYOffset
    if (fromTop >= -60 && fromTop <= 60) {
      this.props.sectionAction(parseInt(this.props.id))
    }
  }

  render(){
    return(
      <div className="project-card" >
      <span className="anchor" id={"section-"+this.props.id}> </span>
        <h2>{this.props.title}</h2>
        <div className="project-video">
          {this.props.video ? <YouTube
            videoId={this.props.video}
          /> : null}
        </div>
        <div className="project-links">
          <a href={this.props.github}><GitIcon style={{width:25 , height:25}}/></a>
          {this.props.blog ? <a href={this.props.blog}><BlogIcon style={{width:25 , height:25}}/></a> : null}
        </div>
        <div className="project-about">
          <h4>About:</h4>
          <p>{this.props.about}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({page}) =>({
  section: page.section
})

const mapDispatchToProps = dispatch =>({
  sectionAction: (section) => dispatch(sectionAction(section))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProjectCard)
