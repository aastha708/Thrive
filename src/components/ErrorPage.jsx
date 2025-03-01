import{Link} from 'react-router-dom';

export default function ErrorPage() {
  return (
    <section>
      <div className='error-center '>
        {/* <img src="./Images/error_msg_emoji.png" alt="" /> */}
        {/* <div className='emoji'></div> */}
        <h2>Error 404</h2>
        <h3>Opps, This Page Not Found !</h3>
        <Link to={'/'} className='btn btn-primary '>Go Back Home</Link>
      </div>
    </section>
  )
}
