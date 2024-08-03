
import PropTypes from 'prop-types';
import styles from './Button.module.css'

function Button({ children, onClick, ...props }) {
  
  return (
    <>
      <button
        className={styles.button}
        onClick={onClick}
        {...props}
        >
          {children}
        </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button