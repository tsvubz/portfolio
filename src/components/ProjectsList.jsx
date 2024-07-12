import Projects from './Projects'
import projects from './projects'

function ProjectsList() {

    const items = projects.map(item => {
        return(
          <Projects
            key={item.id}
            item={item}
          />
        )
      })

  return (
    <section className="project-section">
        <h2 id='projects' className="project-head-title">
            Projects
        </h2>
        <div className="projects-list">
          {items}
        </div>
    </section>
  )
}

export default ProjectsList