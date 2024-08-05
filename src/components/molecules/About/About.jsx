import Container from '../../atoms/Container/Container'
import Flex from '../../atoms/Flex/Flex'
import styles from './About.module.css'

function About() {
  return (
    <Container id='about'>
      <Flex flexDirection='column' alignItems='start'>
        <h2 className={styles.title}>{("About Me").toUpperCase()}</h2>
        <p className={styles.text}>
          I am a versatile and dedicated developer with a solid foundation in both front-end and back-end technologies.
          Proficient in HTML, CSS, JavaScript, and modern frameworks like React, as well as server-side 
          technologies such as Node.js and databases like SQL, I am committed to delivering seamless and robust web applications.
        </p>
        <p className={styles.text}>
          Passionate about continuous learning, stay updated with the latest industry trends and professional growth,
          I am eager to leverage my skills to drive innovation and success in a forward-thinking organization.
        </p>    
      </Flex>
    </Container>
  )
}

export default About