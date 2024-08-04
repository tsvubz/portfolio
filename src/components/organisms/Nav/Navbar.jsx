import { FaEnvelope, FaFile, FaLaptop, FaUserTie } from "react-icons/fa"
import Button from "../../atoms/Button/Button"
import Flex from "../../atoms/Flex/Flex"
import Link from "../../atoms/Link/Link"
import styles from './Navbar.module.css'


function Navbar() {

  return (
    <nav className={styles.nav}>
      <Flex height='8rem' gap='4rem'>
        <Link href='#about'>
          About me
          <FaUserTie />  
        </Link>
        <Link>
          Projects
          <FaLaptop />
        </Link>
        <Link href='#contact'>
          Contact
          <FaEnvelope />
        </Link>
        <Button>Resume <FaFile /></Button>
      </Flex>
    </nav>
   
  )
}

export default Navbar