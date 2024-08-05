import styles from './Projects.module.css'
import Grid from '../../atoms/Grid/Grid'
import Card from '../../molecules/Card/Card'
import projects from '../../projects'
import Container from '../../atoms/Container/Container'

function Projects() {

    const items = projects.map(item => {
        return(
          <Card
            key={item.id}
            item={item}
          />
        )
      })

  return (
    <Container id='projects'>
      <h2 className={styles.title}>{("Projects").toUpperCase()}</h2>
      <Grid columns={{ sm: 1, md: 2, lg: 3 }}>
        {items}
      </Grid>
    </Container> 
  )
}

export default Projects