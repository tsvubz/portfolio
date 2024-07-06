import profile from '../../public/profile.jpg'
import csharp from '../../public/icons/csharp.svg'
import cplus from '../../public/icons/cplus.svg'
import css from '../../public/icons/css.svg'
import html from '../../public/icons/html.svg'
import java from '../../public/icons/java.svg'
import javascript from '../../public/icons/javascript.svg'
import mssql from '../../public/icons/microsoft-sql-server.svg'
import python from '../../public/icons/python.svg'
import react from '../../public/icons/react-native.svg'

function Hero() {
  return (
    <section className='hero-section'>
        <div className='about-me-container'>
            <div id='about' className='about-me'>
                <h2 className='about-me-title'>About Me</h2>
                <p className='about-me-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas at natus veniam tenetur a unde id tempore, possimus, alias quasi ut odio expedita 
                    exercitationem deleniti mollitia iste eaque aperiam odit?
                </p>
                <p className='about-me-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas at natus , alias quasi ut odio expedita 
                    exercitationem deleniti mollitia iste eaque aperiam odit?
                </p>
                <p className='about-me-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas at natus veniam tenetur a unde id tempore, possimus, alias quasi ut odio expedita 
                </p>
            </div>
            <div className='about-me-profile'>
                <img src={profile} alt="Terence Svubure" className='profile'/>
            </div>
        </div>
        <div className='skills'>
            <img src={csharp} alt=""  className='icons' />
            <img src={cplus} alt=""  className='icons' />
            <img src={css} alt=""  className='icons' />
            <img src={html} alt=""  className='icons' />
            <img src={java} alt=""  className='icons' />
            <img src={javascript} alt=""  className='icons' />
            <img src={mssql} alt=""  className='icons' />
            <img src={python} alt=""  className='icons' />
            <img src={react} alt=""  className='icons' />
        </div>
    </section>
  )
}

export default Hero