import logo from '../../public/terry---logo.png'

function Navbar() {

  return (
    <header className="header">
        <div className="header-logo">
            <a href="/"><img src={logo} alt="" className='logo'/></a>
        </div>
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item"><a href="#about"><h3>About</h3></a></li>
                <li className="nav-item"><a href="#projects"><h3>Projects</h3></a></li>
                <li className="nav-item"><a href="#contact"><h3>Contact</h3></a></li>
                <li className="nav-item"><a href="#resume"><h3>Resume</h3></a></li>
            </ul>
        </nav>
    </header>
   
  )
}

export default Navbar