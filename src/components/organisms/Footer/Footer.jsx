
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import styles from './Footer.module.css'
import Flex from "../../atoms/Flex/Flex";
import Link from "../../atoms/Link/Link";
import Container from "../../atoms/Container/Container";

function Footer() {

    const currentYear = new Date().getFullYear();
  return (
    <Container>
        <Flex flexDirection='column' gap='2rem'>
            <Flex className={styles.links}>
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
                <p className={styles.footertext}>&copy; {currentYear} Terence Svubure. All rights reserved.</p>
                <Link className={styles.footerlink} href='https://github.com/tsvubz' target='_blank'>
                    <FaGithub />
                    Checkout The Source Code
                </Link>
            </Flex>
        </Flex> 
    </Container>
  )
}

export default Footer