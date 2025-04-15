import './index.scss'
// import ProfilePic from '../../assets/images/Profile_LessColor.png'

const About = () => {


    return (   

        <div className="container about-page">
        <div className="text-zone">
        <h1>
            ABOUT ME
        </h1>
        {/* <img src={ProfilePic} alt="Alisabeth"/> */}
        <p>
            I'm a data scientist with 6 years experience in conceptualizing and programming 
            data-driven solutions in multiple industries and fields. But in short, 
            I'm a <b>pattern finder</b>. In the chaos and unpredictability of everyday life, 
            I take solace in the existence of large-scale order and patterns—discoveries that help us feel 
            in control of what's happening around us. But I'm also a <b>creative</b> at heart. 
            I thrive on expanding statistically robust tools and methodologies and using 
            them in unique ways to quantify phenomena that seemingly evade replicability.
        </p>
        <p align="LEFT">
            My recent work at Princeton is a state-of-the-art agent-based model that simulates the interpersonal dynamics that 
            lead to shootings in American cities. This model allows us to test how small alterations in violent 
            interactions reverberate across entire communities and cities, which we hope will help to inform 
            current gun violence interventions.
        </p>
        {/* <p>
            Previous work has included my undergraduate thesis that used a neural network to estimate galaxy bias; 
            a recurrent neural network to classify the discourse acts of Reddit comments for evaluating film reviews 
            at Legendary Entertainment (now Warner Media); and at 84.51° (Kroger's analytics group), a custom metric for 
            selecting optimal products for certain promotions based on purchase histories.
        </p> */}
        <p>
        In my spare time, I enjoy long-distance swimming, playing the piano, writing poetry, and coddling my 
        little tuxedo cat Calypso.
        </p>
        </div>
    </div>
  )

}

export default About