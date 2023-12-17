import '../Pages/CSS/Footer.css';
import github from '../img/github_icon.png'
import linkedIn from '../img/linkedin_icon.png'

export const Footer = () => {
    return (
        <footer className="footer"> 
            <div className='icons'>
                <a href='https://github.com/Maxwell-Calhoun' target="_blank" rel="noreferrer">
                    <img className='ghIcon' src={github} alt="Github Icon"/>
                </a>
                <a href='https://www.linkedin.com/in/maxwell-calhoun' target="_blank" rel="noreferrer">
                    <img className='lnIcon' src={linkedIn} alt="Github Icon"/>
                </a>
            </div>
            <div className='notes'>
                <p className='note'>
                Developed by: Maxwell Calhoun
                </p>
                <p className='note'>
                Utilizing: js, react, p5.js and node.js
                </p>
            </div>
        </footer>
    )
}