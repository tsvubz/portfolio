import PropTypes from 'prop-types';
import Flex from '../../atoms/Flex/Flex'
import Link from '../../atoms/Link/Link'
import styles from './Card.module.css'
import { FaGithub } from "react-icons/fa"

function Card(props) {
  return (
    <Flex flexDirection='column'>
        <img src={`../../images/${props.item.imageUrl}`} alt="" className={styles.image}/>
        <h3 className={styles.title}>{props.item.title}</h3>
        <p className={styles.text}>
            {props.item.text} 
        </p>
        <Link href={props.item.link} target='_blank'>
            <FaGithub />
            Source Code
        </Link>
    </Flex>
  )
}

Card.propTypes = {
    item: PropTypes.string.isRequired,
}

export default Card