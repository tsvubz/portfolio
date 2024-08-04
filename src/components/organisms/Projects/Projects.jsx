import styles from './Projects.module.css'
import Grid from '../../atoms/Grid/Grid'
import Card from '../../molecules/Card/Card'
import projects from '../../projects'

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
    <section className={styles.projects}>
        <Grid>
            {items}
        </Grid>
    </section>
    
  )
}

export default Projects