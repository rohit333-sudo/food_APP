import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Header({detect}) {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token');
    detect();
    navigate('/')
  }
  return (
   <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="#">food App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     {  localStorage.getItem('token')&&<li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>

     } 
    </ul>
    {
      localStorage.getItem('token')?
    
    <div className='d-flex'>
        <Link className="nav-link" to=""><button className='btn btn-primary'>Mycart</button></Link>
        <Link className="nav-link" to=""><button onClick={()=>{handleLogout()}} className='btn btn-danger'>Logout</button></Link> 
    </div>:<div className='d-flex'>
        <Link className="nav-link" to="/login"><button className='btn btn-primary'>Login</button></Link>
        <Link className="nav-link" to="/signup"><button className='btn btn-danger'>SignUp</button></Link> 
    </div>
}
  </div>
</nav>
   </>
  )
}

export default Header;