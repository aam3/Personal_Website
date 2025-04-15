import './index.scss'
import resumePDF from '../../assets/docs/AMarsteller_Resume_2025.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='content'>
                <div className='text-zone'>
                    <h1>Alisabeth Marsteller</h1>
                    <h2>DATA SCIENTIST</h2>
                    <h3>Inferential Statistics / Machine Learning / Spatial Analysis</h3>
                    <h4>Python / R / SQL</h4>
                    <a href={resumePDF} className="resume-button" target="_blank" rel="noopener noreferrer">Resumé</a>
                    <div className="social-icons">
                        <a href="https://github.com/aam3" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{ color: "#000000" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/alisabeth-m-21273b117/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#000000" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home