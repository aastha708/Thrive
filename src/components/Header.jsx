// import { Link, useLocation } from 'react-router-dom';

// // import react icon--------
// import { FiAlignJustify } from "react-icons/fi";
// import { MdClose } from "react-icons/md";

// import { useState } from 'react';
// import BMI from './BMI/BMI';


// export default function Header()
// {
//   const location = useLocation();

//   let [isNavShow,setIsNavShow]=useState(window.innerWidth > 1024 ? true: false )

//   function closeNavHandler()
//   {
//     if(window.innerWidth < 1024)
//     {
//       setIsNavShow(false);
//     }
//     else
//     {
//       setIsNavShow(true);
//     }
//   }
//   if (location.pathname === '/sign/signup' ) {
//     return null;
//   }
//     return(
//         <nav className='nav'>
//           <div className='container nav-container'>
//             <Link className='nav-logo link' to={'/'}>
//               <h3>ActiveTrack</h3>
//             </Link>

//             {isNavShow && <ul className='nav-menu'>
//               <li><Link className='link' to="/" onClick={closeNavHandler}>Home</Link></li>
//               <li><Link className='link' to="/about" onClick={closeNavHandler}>About</Link></li>
//               <li><Link className='link' to="/dashboard" onClick={closeNavHandler}>Dashboard</Link></li>
//               <li><Link className='link' to="/workout" onClick={closeNavHandler}>Workout</Link></li>
//               <li><Link className='link' to="/contact" onClick={closeNavHandler}>Contact</Link></li>
//               <li><Link className='link signupbtn' to="/sign/signup" onClick={closeNavHandler}>sign up</Link></li>

//             </ul>}

//             <button className='nav-toggle-button btn btn-primary btn-category' onClick={()=>
//               {
//                 setIsNavShow(!isNavShow);
//               }
//             }>
//               {
//                 isNavShow ?  <MdClose />  : <FiAlignJustify />
//               }
              
              
//             </button>
//           </div>
       
//       </nav> 
//     )
// }
// --------------------------------------------------------------------------
import { Link, useLocation } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const [isNavShow, setIsNavShow] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsNavShow(true);
      } else {
        setIsNavShow(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function closeNavHandler() {
    if (window.innerWidth < 1024) {
      setIsNavShow(false);
    }
  }

  if (location.pathname === '/sign/signup') {
    return null;
  }

  return (
    <nav className='nav'>
      <div className='container nav-container'>
        <Link className='nav-logo link' to={'/'}>
          <h3>ActiveTrack</h3>
        </Link>

        <ul className={`nav-menu ${isNavShow ? 'show' : ''}`}>
          <li><Link className='link' to="/" onClick={closeNavHandler}>Home</Link></li>
          <li><Link className='link' to="/about" onClick={closeNavHandler}>About</Link></li>
          <li><Link className='link' to="/dashboard" onClick={closeNavHandler}>Dashboard</Link></li>
          <li><Link className='link' to="/workout" onClick={closeNavHandler}>Workout</Link></li>
          <li><Link className='link' to="/contact" onClick={closeNavHandler}>Contact</Link></li>
          {/* <li><Link className='signupbtn' to="/sign/signup" onClick={closeNavHandler}>Sign Up</Link></li> */}
        </ul>

        <button className='nav-toggle-button btn btn-primary btn-category' onClick={() => setIsNavShow(!isNavShow)}>
          {isNavShow ? <MdClose /> : <FiAlignJustify />}
        </button>
      </div>
    </nav>
  );
}
