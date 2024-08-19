
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
            <Flex mobileDirection='row' tabletDirection='row' gap='8rem'>
                <Link href='https://github.com/tsvubz' target='_blank' fontSize='2.5rem'>
                    <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/terence-svubure/" target='_blank' fontSize='2.5rem'>
                    <FaLinkedin />
                </Link>
                <Link href="mailto:tsvubure@gmail.com" target='_blank' fontSize='2.5rem'>
                    <FaEnvelope />
                </Link>
            </Flex>
            <Flex flexDirection='column'>
                <p className={styles.footertext}>&copy; {currentYear} Terence Svubure. All rights reserved.</p>
                <Link href='https://github.com/tsvubz/portfolio' target='_blank' letterSpacing='-1.5px' gap='0rem'>
                    <FaGithub />
                    Checkout The Source Code
                </Link>
            </Flex>
        </Flex> 
    </Container>
  )
}

export default Footer