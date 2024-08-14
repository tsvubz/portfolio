import styles from './Container.module.css'
import PropTypes from 'prop-types';

function Container({ children, paddingTop, ...props }) {

    const containerStyle = {
      paddingTop: paddingTop,
    }

  return (
    <div className={styles.container} style={containerStyle} {...props}>
      {children}
    </div>
  )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    paddingTop: PropTypes.string,
  };

export default Container