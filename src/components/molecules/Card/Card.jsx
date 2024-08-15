import PropTypes from 'prop-types';
import Link from '../../atoms/Link/Link'
import styles from './Card.module.css'
import { FaGithub } from "react-icons/fa"
import Grid from '../../atoms/Grid/Grid';
import Flex from '../../atoms/Flex/Flex';

function Card({ item }) {
  return (
    <Grid gridTemplateRows='auto 1fr auto' gridTemplateColumns='auto' gap='1rem' alignItems='start'>
      <div className={styles.imageContainer}>
        <img src={`../../images/${item.imageUrl}`} alt="" className={styles.image}/>
      </div>
      <Flex flexDirection="column" className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.text}>{item.text}</p>
      </Flex>
      <Flex className={styles.footer}>
        <Link href={item.link} target='_blank' letterSpacing='-1.5px' gap='0rem'>
          <FaGithub />
          Source Code
        </Link>
      </Flex>
    </Grid>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card