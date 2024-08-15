
import Container from '../../atoms/Container/Container'
import skills from '../../skills'
import Skills from '../../molecules/Skills/Skills'
import Grid from '../../atoms/Grid/Grid'

function Tech() {

    const items = skills.map(item => {
        return(
          <Skills
            key={item.id}
            item={item}
          />
        )
      })

  return (
    
    <Container>
        <Grid gridTemplateRows='auto 1fr' gap='4rem'>
            {items}
        </Grid>
    </Container>
  )
}

export default Tech