import PropTypes from 'prop-types';
import styles from './Grid.module.css';

const Grid = ({ children, columns = { sm: 1, md: 2, lg: 3 }, ...props }) => {
  const gridClass = `${styles.grid} ${styles[`cols-sm-${columns.sm}`]} ${styles[`cols-md-${columns.md}`]} ${styles[`cols-lg-${columns.lg}`]}`;

  return (
    <div className={gridClass} {...props}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.shape({
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }),
};

export default Grid;