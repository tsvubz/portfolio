import Progress from '../../atoms/Progress/Progress'
import Grid from '../../atoms/Grid/Grid'
import PropTypes from 'prop-types';

function Skills({ item }) {
  return (
    <Grid gridTemplateColumns='auto 1fr' gap='2rem'>
        <img src={`../../../../public/icons/${item.icon}`} alt="" />
        <Progress value={item.value} max={item.max}/>
    </Grid>
  )
}

Skills.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
  }).isRequired,
}

export default Skills