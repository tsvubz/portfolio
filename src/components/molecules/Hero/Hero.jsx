import Flex from "../../atoms/Flex/Flex"
import heroImage from '../../../assets/images/profile.jpg'
import styles from './Hero.module.css'
import Container from "../../atoms/Container/Container"


function Hero() {
  return (
    <Container paddingTop='8rem'>
        <Flex className={styles.heroFlex}> 
            <Flex className={styles.textContent}>
              <p className={styles.p}>Hi I&apos;m</p>
              <h1 className={styles.h1}>Terence Svubure</h1>
              <h3 className={styles.h3}>Web Developer | Software Developer</h3>
            </Flex>
            <Flex className={styles.imageContent}> 
              <img className={styles.img} src={heroImage} alt=""/>
            </Flex>
        </Flex>
    </Container>
  )
}

export default Hero