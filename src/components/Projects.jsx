import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects(props) {
  return (
    
        
        <div className='project-container'>
            <div className='project-image'>
                <img src={`../../images/${props.item.imageUrl}`} alt="" className='proj-image'/>
            </div>
            <div className='project-details'>
                <h3 className="project-title">
                    {props.item.title}
                </h3>
                <p className="project-text">
                    {props.item.text}
                </p>
                <p className="project-tech">
                    {props.item.tech}   
                </p>
                <div className="project-link">
                    <a href={props.item.link} target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className='project-link-icon'/>
                    <span className='project-link-text'>Source Code</span>
                    </a>
                </div>
            </div>
        </div>
    
  )
}

Projects.propTypes = {
    item: PropTypes.string.isRequired,
}

export default Projects