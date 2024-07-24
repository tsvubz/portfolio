import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopesBulk, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


function Footer() {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer-container'>
        <div className='footer-icon-box'>
            <a href='https://github.com/tsvubz' target='_blank'>
                <FontAwesomeIcon icon={faGithub} className='footer-icon'/>
            </a>
            <a href="https://www.linkedin.com/in/terence-svubure/">
                <FontAwesomeIcon icon={faLinkedin} className='footer-icon'/>
            </a>
            <a href="mailto:tsvubure@gmail.com">
                <FontAwesomeIcon icon={faEnvelopesBulk} className='footer-icon'/>
            </a>
        </div>
        <div className='footer-box'>
            <p>&copy; {currentYear} Terence Svubure. All rights reserved.</p>
            <a href='https://github.com/tsvubz' target='_blank'>
                <FontAwesomeIcon icon={faGithub} className='footer-box-icon'/>
                <span className='footer-text'>Checkout The Source Code</span>
                <FontAwesomeIcon icon= {faUpRightFromSquare} className='footer-box-icon' />
            </a>
        </div>
    </footer>
  )
}

export default Footer