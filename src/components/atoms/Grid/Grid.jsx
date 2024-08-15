import PropTypes from 'prop-types';
import styles from './Grid.module.css';

const Grid = ({ children, columns = { sm: 1, md: 2, lg: 3 }, alignItems, gridTemplateRows, gridTemplateColumns, gap, rowGap, columnGap, ...props }) => {
  const gridClass = `${styles.grid} ${styles[`cols-sm-${columns.sm}`]} ${styles[`cols-md-${columns.md}`]} ${styles[`cols-lg-${columns.lg}`]}`;

  const gridStyle = {
    alignItems: alignItems,
    gridTemplateRows: gridTemplateRows,
    gridTemplateColumns: gridTemplateColumns,
    gap: gap,
    rowGap: rowGap,
    columnGap: columnGap,
  }

  return (
    <div className={gridClass} style={gridStyle} {...props}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  alignItems: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  gridTemplateColumns: PropTypes.string,
  gap: PropTypes.string,
  rowGap: PropTypes.string,
  columnGap: PropTypes.string,
  columns: PropTypes.shape({
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }),
};

export default Grid;