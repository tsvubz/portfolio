
import styles from './Flex.module.css'
import PropTypes from 'prop-types'


function Flex({ children, alignItems, flexDirection, justifyContent, gap, textAlign, height, mobileDirection, tabletDirection, ...props }) {

  const flexStyle = {
    alignItems: alignItems,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    gap: gap,
    textAlign: textAlign,
    height: height,
    '--mobile-direction': mobileDirection,
    '--tablet-direction': tabletDirection,
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
  textAlign: PropTypes.string,
  height: PropTypes.string,
  mobileDirection: PropTypes.string,
  tabletDirection: PropTypes.string,
}

Flex.propTypes = {
  alignItems: 'center',
  flexDirection: 'center',
  justifyContent: 'center',
  gap: '0rem',
}

export default Flex