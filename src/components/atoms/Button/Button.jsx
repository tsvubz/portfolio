
import PropTypes from 'prop-types';
import styles from './Button.module.css'
import pdf from '../../../../public/documents/ResumeTerenceSvubure.pdf'

function Button({ children, ...props }) {

  function handleClick(){
    window.open(pdf, '_blank');
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