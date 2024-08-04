
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowAltCircleUp} from "react-icons/fa"
import styles from './Footer.module.css'
import Flex from "../../atoms/Flex/Flex";
import Link from "../../atoms/Link/Link";

function Footer() {

    const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
        <Flex flexDirection='column' gap='2rem'>
            <Flex gap='8rem'>
                <Link className={styles.link} href='https://github.com/tsvubz' target='_blank'>
                    <FaGithub />
                </Link>
                <Link className={styles.link} href="https://www.linkedin.com/in/terence-svubure/" target='_blank'>
                    <FaLinkedin />
                </Link>
                <Link className={styles.link} href="mailto:tsvubure@gmail.com" target='_blank'>
                    <FaEnvelope />
                </Link>
            </Flex>
            <Flex flexDirection='column'>
                <p>&copy; {currentYear} Terence Svubure. All rights reserved.</p>
                <Link href='https://github.com/tsvubz' target='_blank'>
                    <FaGithub />
                    Checkout The Source Code
                    <FaArrowAltCircleUp />
                </Link>
            </Flex>
        </Flex> 
    </footer>
  )
}

export default Footer