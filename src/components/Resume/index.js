import './index.scss'
import resumePDF from '../../assets/docs/AMarsteller_Resume_2024.pdf'


const Resume = () => {

return(
    <div className='container resume-page'>
        <div className="text-zone">
        <h1>RESUME</h1>
        {/* <h1>'Hello'</h1> */}
            <iframe src={resumePDF} title='myresume' width='100%' height='800px' />
        </div>
    </div>
)

}

export default Resume