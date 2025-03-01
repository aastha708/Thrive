
import Header from '../components/Header'
import Footer from '../components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from '../components/About'
import Dashboard from '../components/Dashboard'
import Workout from '../components/Workout'
import Home from '../components/Home'
import Contact from '../components/Contact'
import SignUp from '../components/SignUp'
import BMI from './BMI/BMI'
import CalorieCalculator from '../components/CalorieCalculator'
import FindExercises from './FindExercise'


export default function Router() {
  return (
    <div className='router'>
        <BrowserRouter>

        <Header/> 

        <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/workout' element={<Workout/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='sign/signup' element={<SignUp/>} />
            <Route path='bmi' element={<BMI/>} />
            <Route path='calorie-counter' element={<CalorieCalculator/>} /> {/* New route */}
            <Route path='exercise' element={<FindExercises/>} /> {/* New route */}


        </Routes>    

        

        <Footer/> 

      </BrowserRouter>
      
    </div>
  )
}
