import { useState } from "react"
import { FaEnvelope, FaFile, FaLaptop, FaUserTie, FaTimes, FaBars } from "react-icons/fa"
import Button from "../../atoms/Button/Button"
import Flex from "../../atoms/Flex/Flex"
import Link from "../../atoms/Link/Link"
import styles from './Navbar.module.css'


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <Flex height='4rem' justifyContent='center' alignItems='center'>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`${styles.menuItems} ${isMenuOpen ? styles.showMenu : ''}`}>
          <Link href='#about'>
            About me
            <FaUserTie />  
          </Link>
          <Link href='#projects'>
            Projects
            <FaLaptop />
          </Link>
          <Link href='#contact'>
            Contact
            <FaEnvelope />
          </Link>
          <Button>Resume <FaFile /></Button>
        </div>
      </Flex>
    </nav>
   
  )
}

export default Navbar