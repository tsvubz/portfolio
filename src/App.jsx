
import About from "./components/molecules/About/About"
import Contact from "./components/molecules/Contact/Contact"
import Hero from "./components/molecules/Hero/Hero"
import Footer from "./components/organisms/Footer/Footer"
import Navbar from "./components/organisms/Nav/Navbar"
import Projects from "./components/organisms/Projects/Projects"
import Tech from "./components/organisms/Tech/Tech"


function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
