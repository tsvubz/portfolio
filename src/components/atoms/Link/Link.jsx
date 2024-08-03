import PropTypes from 'prop-types'
import styles from './Link.module.css'



function Link({ children, href, ...props }) {



  

  return (
    <>
      <a className={styles.link} href={href} {...props}>
        {children}
      </a>
    </>
  )
}

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
  };

export default Link