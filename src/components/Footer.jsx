import{Link,useLocation} from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  // Don't render the header on the signup page
  if (location.pathname === '/sign/signup') {
    return null;
  }
  return (

    <footer>
      <div className='container footer-container'>
        {/* <ul className='footer-categories'>
          <li><Link to={'/'}></Link></li>
          <li><Link to={'/'}></Link></li>
          <li><Link to={'/'}></Link></li>
          <li><Link to={'/'}></Link></li>

        </ul> */}

        <div className='footer-copyright'>
          <small >Copyright <span>&copy;</span> 2024. All Rights Reserved || Made with <span>&hearts;</span>.
          </small>.
        </div>

        </div>
      
    </footer>
  )
}
