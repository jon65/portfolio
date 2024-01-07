// import Typewriter from "../Typewriter";
// import myPicProfessional from './assets/myPicProfessional.jpeg';
import ReusableSlideInWithFade from '../animation/ReusableSlideInWithFade';
import FadeIn from '../animation/FadeIn';
import './Landing.css';
import Typewriter from '../animation/Typewriter';
import Padding from '../components/Padding';
import Risograph from '../components/Risograph';

const Landing = () => { 

    return (
        <div className="Landing">
                <div className="row1">
                    <ReusableSlideInWithFade backgroundColor="lightblue" duration={0.8}>
                    <h1>Hi! 👋🏻 </h1>
                    <Padding/>
                    <h1>
                        I'm Jonathan,
                    </h1>
                    </ReusableSlideInWithFade>
            </div>
            <div className="row2">
                    <h3>
                        <Typewriter textList={["Aspiring Software Engineer", "Rock Climbing Enthusiast"]} typingDelay={70} delDelay={20} wordDelay={1500}/>                    
                    </h3>
            </div>
                {/* <div className="row3">
                    <FadeIn duration={2}>
                </FadeIn>
                        <div>
                        </div>
                    </div> */}
        </div>
    );
}

export default Landing;