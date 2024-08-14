import Flex from "../../atoms/Flex/Flex"
import heroImage from '../../../assets/images/profile.jpg'
import styles from './Hero.module.css'
import Container from "../../atoms/Container/Container"
import useTypewriter from "../../hooks/Typewriter"

function Hero() {
  const titles = [
    "Web Developer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];

  const { displayText, isTyping } = useTypewriter(titles, 100, 2000)

  return (
    <Container paddingTop='8rem'>
        <Flex className={styles.heroFlex}> 
            <Flex className={styles.textContent}>
              <p className={styles.p}>Hi I&apos;m</p>
              <h1 className={styles.h1}>Terence Svubure</h1>
              <Flex>
                <h3 className={styles.h3}>{displayText}</h3>
                {!isTyping && <span className={styles.cursor}>|</span>}
              </Flex>
            </Flex>
            <Flex className={styles.imageContent}> 
              <img className={styles.img} src={heroImage} alt=""/>
            </Flex>
        </Flex>
    </Container>
  )
}

export default Hero