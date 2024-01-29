// import Typewriter from "../Typewriter";
// import myPicProfessional from './assets/myPicProfessional.jpeg';
import ReusableSlideInWithFade from '../animation/ReusableSlideInWithFade';
import FadeIn from '../animation/FadeIn';
import './Landing.css';
import Typewriter from '../animation/Typewriter';
import Padding from '../components/Padding';
import Risograph from '../components/Risograph';
import codePen from '../assets/codePen.png';

const Landing = () => { 

    return (
        <div className="Landing" id="Landing">
                <div className="row1">
                    <ReusableSlideInWithFade backgroundColor="lightblue" duration={0.8}>
                    <h1>Hi!</h1>
                    <Padding />
                    <h1>
                        I'm Jonathan,
                    </h1>
                    </ReusableSlideInWithFade>
            </div>
            <div className="row2">
                    <h3>
                        <Typewriter textList={["Aspiring Software Engineer", "Rock Climbing Enthusiast", "lifelong learner", "tech geek"]} typingDelay={70} delDelay={20} wordDelay={1500}/>                    
                    </h3>
            </div>
            <div className="banner-logo">
                <img src={ codePen} alt="" />
            </div>
        </div>
    );
}

export default Landing;