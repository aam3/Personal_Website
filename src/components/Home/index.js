import './index.scss'
import resumePDF from '../../assets/docs/AMarsteller_Resume_2024.pdf'

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='content'>
                <div className='text-zone'>
                    <h1>Alisabeth Marsteller</h1>
                    <h2>DATA SCIENTIST</h2>
                    <h3>Inferential Statistics / Statistical Modeling / Causal Inference</h3>
                    <h4>Python / R / SQL</h4>
                    <a href={resumePDF} className="resume-button" target="_blank" rel="noopener noreferrer">Resumé</a>
                </div>
            </div>
        </div>
    )
}

export default Home