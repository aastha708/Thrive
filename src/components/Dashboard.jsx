import ErrorPage from '../components/ErrorPage'
import { Outlet } from "react-router-dom";

export default function Dashboard()
{
    return(
        <div className="dashboard">
            {<ErrorPage/>} 
            
            <Outlet/>
        </div>
    )
}