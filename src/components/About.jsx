// // import { Outlet ,Link} from 'react-router-dom';
// import './About.css'

// function About()
// {
//     return(
//         // <div className="about">
//         <div className="about-container">
//         <h1 className="fade-in">About  ActiveTrack</h1>
//         <p className="fade-in">
//           Welcome to <strong>FitTrack</strong>, your ultimate fitness companion. Achieve your health and wellness goals with our personalized tools.
//         </p>
  
//         <div className="section mission-section">
//           <h2 className="slide-in-left">Our Mission</h2>
//           <p className="fade-in">
//             Empowering you to take control of your health and fitness through innovative, user-friendly technology.
//           </p>
//         </div>
  
//         <div className="section features-section">
//           <h2 className="slide-in-right">Key Features</h2>
//           <div className="features">
//             <div className="feature-item">
//               <div className="icon">💪</div>
//               <h3>BMI Calculation</h3>
//               <p>Understand your health status.</p>
//             </div>
//             <div className="feature-item">
//               <div className="icon">🏋️</div>
//               <h3>Customized Workouts</h3>
//               <p>Personalized workout plans.</p>
//             </div>
//             <div className="feature-item">
//               <div className="icon">🍎</div>
//               <h3>Nutrition Tracking</h3>
//               <p>Monitor your daily intake.</p>
//             </div>
//             <div className="feature-item">
//               <div className="icon">📈</div>
//               <h3>Goal Tracking</h3>
//               <p>Track your fitness progress.</p>
//             </div>
//           </div>
//         </div>
  
//         <div className="section contact-section">
//           <h2 className="slide-in-left">Contact Us</h2>
//           <p className="fade-in">
//             Need support? Reach out at <a href="snehalatadas42376@gmail">snehalatadas42376@gmail</a> or visit our <a href="#">Contact Page</a>.
//           </p>
//         </div>
        
//         <p className="fade-in thank-you">Thank you for choosing FitTrack. Let's achieve your fitness goals together!</p>
//       </div>
//         // </div>
//     )
// }
// export default About;

import './About.css';

function About() {
    return (
        <div className="about-container">
            <h1 className="fade-in">About Website</h1>
            <p className="intro-text fade-in">
                Welcome to <strong>ActiveTrack</strong>, your ultimate fitness companion designed to help you achieve your health and wellness goals. Whether you're aiming to lose weight, build muscle, or simply lead a healthier lifestyle, FitTrack is here to support your journey with a range of personalized tools and features.
            </p>

            <div className="section mission-section">
                <h2 className="slide-in-left">Our Mission</h2>
                <p className="fade-in">
                    At ActiveTrack, our mission is to empower individuals to take control of their health and fitness through easy-to-use, innovative technology. We believe that everyone deserves access to the resources they need to reach their full potential, and we are dedicated to providing a platform that makes fitness tracking simple, enjoyable, and effective.
                </p>
            </div>

            <div className="section features-section">
                <h2 className="slide-in-right">Key Features</h2>
                <div className="features">
                    <div className="feature-item">
                        <div className="icon">💪</div>
                        <h3>BMI Calculation</h3>
                        <p>Understand your health status.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">🏋️</div>
                        <h3>Customized Workouts</h3>
                        <p>Personalized workout plans.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">🍎</div>
                        <h3>Nutrition Tracking</h3>
                        <p>Monitor your daily intake.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">📈</div>
                        <h3>Goal Tracking</h3>
                        <p>Track your fitness progress.</p>
                    </div>
                </div>
            </div>

            <div className="section contact-section">
                <p className="fade-in pcen">
                    Need support? Reach out at <a href="mailto:snehalatadas42376@gmail.com">snehalatadas42376@gmail.com</a> or visit our <a href="#">Contact Page</a>.
                </p>
            </div>

            <p className="fade-in thank-you pcen">Thank you for choosing ActiveTrack. Let's achieve your fitness goals together!</p>
        </div>
    );
}

export default About;
