
import styles from './Grid.module.css'
import PropTypes from 'prop-types';



const Grid = ({ children, ...props }) => {

  
  return (
    <div
      className={styles.grid}
     
      {...props}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Grid;
