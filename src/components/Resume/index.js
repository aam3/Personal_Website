import './index.scss'
import resumePDF from '../../assets/docs/AMarsteller_Resume_2024.pdf'


const Resume = () => {

return(
    <div className='container resume-page'>
        <div className="text-zone">
        <h1><a href="https://drive.google.com/file/d/1e-o9vkuFVgUJ2jsh55TizoVy8LwgRC_1/view?usp=drive_link">RESUME</a></h1>
            <div className="pdf-zone">
                <iframe src={resumePDF} title='myresume' width='100%' height='800px' />
            </div>
        </div>
    </div>
)

}

export default Resume