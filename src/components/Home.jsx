import Origin from '../Origin'
import Programcard from '../components/ProgramCad/Programcard'
import '../App.css'
// import { Outlet } from 'react-router-dom'


export default function Home()
{
    return(
        <div className="home">
            {<Origin/>}
            
            <div className='container2'>
               { <Programcard/>}
            </div>
            
        </div>
    )
}

