import PropTypes from 'prop-types';
import styles from './Progress.module.css';

function Progress({ value, max, color }) {
  const percentage = (value / max) * 100;

  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  );
}

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  color: PropTypes.string,
};

Progress.defaultProps = {
  color: 'var(--color-primary)',
};

export default Progress;
