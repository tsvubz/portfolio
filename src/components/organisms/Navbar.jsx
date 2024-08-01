import { FaEnvelope, FaFile, FaLaptop, FaUserTie } from "react-icons/fa"
import ResumeButton from "../atoms/Button/Button"
import Flex from "../atoms/Flex/Flex"
import Link from "../atoms/Link/Link"
import { FlexDirection } from "../styles"


function Navbar() {

  return (
    <header>
      <Flex direction={FlexDirection.ROW} gap='8rem' height='8rem'>
        <Link gap='0.5rem'>
          About me
          <FaUserTie />  
        </Link>
        <Link gap='0.5rem'>
          Projects
          <FaLaptop />
        </Link>
        <Link gap='0.5rem'>
          Contact 
          <FaEnvelope />
        </Link>
        <ResumeButton gap='0.5rem'>Resume <FaFile /></ResumeButton>
      </Flex>
      
    </header>
   
  )
}

export default Navbar