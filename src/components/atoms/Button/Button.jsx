
import PropTypes from 'prop-types';
import styles from './Button.module.css'

function Button({ children, ...props }) {

  function handleClick(){
    window.open('../../../../public/documents/Resume for Terence Svubure.pdf', '_blank');
  }
  
  return (
    <>
      <button
        className={styles.button}
        onClick={handleClick}
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