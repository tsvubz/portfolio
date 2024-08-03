
import { FaEnvelope, FaLinkedin } from "react-icons/fa"
import styles from './Contact.module.css'
import Flex from '../../atoms/Flex/Flex'
import Link from '../../atoms/Link/Link'


function Contact() {
  return (
    <section className={styles.section}>
        <Flex flexDirection='column' gap='0.5rem' alignItems='start'>
            <h2 className={styles.title}>Contact Me</h2>
            <Link href='mailto:tsvubure@gmail.com' className={styles.link} >
                <FaEnvelope />
                tsvubure@gmail.com
            </Link>
            <Link href='https://www.linkedin.com/in/terence-svubure/' target='_blank' className={styles.link}>
                <FaLinkedin />
                terence-svubure
            </Link>
        </Flex>                
    </section>
  )
}

export default Contact