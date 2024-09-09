import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Home = () => {

    return (
        <div className='container home-page'>
            {/* <img src={ProfilePic} alt="Picture of Alisabeth"/> */}
            <div className='text-zone'>
                <h1>ALISABETH MARSTELLER</h1>
                <h2>DATA SCIENTIST</h2>
                <h3>Inferential Statistics / Statistical Modeling / Causal Inference</h3>
                <h4>Python / R / SQL</h4>

                <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/alisabeth-m-21273b117/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                        icon={faLinkedin}
                        color="#4d4d4e"
                        className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/aam3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                        icon={faGithub}
                        color="#4d4d4e"
                        className="anchor-icon"
                        />
                    </a>
                </li>
        </ul>

            </div>
        </div>
    )
}


export default Home