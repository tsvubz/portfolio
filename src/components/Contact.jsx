import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact() {
  return (
    <section className='contact-section'>
        <div className='contact-title-box'>
            <h2 className='contact-title'>Contact Me</h2>
        </div>
        <div className='contact-box'>
            <a href="mailto:tsvubure@gmail.com">
                <FontAwesomeIcon icon={faEnvelopesBulk} className='contact-icon'/>
                <span className='contact-text'>tsvubure@gmail.com</span>
            </a>
        </div>
        <div className='contact-box'>
            <a href="https://www.linkedin.com/in/terence-svubure/">
                <FontAwesomeIcon icon={faLinkedin} className='contact-icon'/>
                <span className='contact-text'>terence-svubure</span>
            </a>
        </div>
    </section>
  )
}

export default Contact