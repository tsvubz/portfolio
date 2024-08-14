import PropTypes from 'prop-types'
import styles from './Link.module.css'



function Link({ children, href, marginRight, letterSpacing, gap, fontSize, ...props }) {


  const linkStyle = {
    marginRight: marginRight,
    letterSpacing: letterSpacing,
    gap: gap,
    fontSize: fontSize,
  }

  return (
    <>
      <a className={styles.link} style={linkStyle} href={href} {...props}>
        {children}
      </a>
    </>
  )
}

Link.propTypes = {
    href: PropTypes.string,
    marginRight: PropTypes.string,
    letterSpacing: PropTypes.string,
    gap: PropTypes.string,
    fontSize: PropTypes.string,
    children: PropTypes.node,
  };

export default Link