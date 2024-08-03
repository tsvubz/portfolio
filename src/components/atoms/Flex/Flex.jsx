
import styles from './Flex.module.css'
import PropTypes from 'prop-types'


function Flex({ children, alignItems, flexDirection, justifyContent, gap, height, ...props }) {

  const flexStyle = {
    alignItems: alignItems,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    gap: gap,
    height: height,
  }

  return (
    <>
        <div className={styles.flex} style={flexStyle} {...props}>
          {children}
        </div> 
    </>
  )
}

Flex.propTypes = {
  children: PropTypes.node,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  gap: PropTypes.string,
  height: PropTypes.string,
}

Flex.propTypes = {
  alignItems: 'center',
  flexDirection: 'center',
  justifyContent: 'center',
  gap: '0rem',
  height: '0rem',
}

export default Flex