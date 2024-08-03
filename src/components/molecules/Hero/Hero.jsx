import Flex from "../../atoms/Flex/Flex"
import heroImage from '../../../assets/images/profile.jpg'
import styles from './Hero.module.css'


function Hero() {
  return (
    <section className={styles.hero}>
        <Flex gap='0rem'> 
            <Flex flexDirection='column' gap='0rem' >
                <p className={styles.p}>Hi I&apos;m </p>
                <h1 className={styles.h1}>Terence Svubure</h1>
                <h3 className={styles.h3}>Web Developer | Software Developer</h3>
            </Flex>
            <Flex> 
                <img className={styles.img} src={heroImage} alt=""/>
            </Flex>
        </Flex>
    </section>
  )
}

export default Hero