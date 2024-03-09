import React ,{useState}from 'react'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

function Login() {
  const [data,setData]=useState({email:'',password:""});
  const navigate=useNavigate()
const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value})
// alert(data.password)
}  
const submit = async (event)=>
{
    event.preventDefault();
    try
    {
    const response = await axios.post('http://localhost:5000/login',data);
 
      console.log('Server response:', response.data);
localStorage.setItem("token",response.data.token)
navigate('/');
    } catch (error) {
        console.error('Axios error msg:', error);
        // Handle error: for example, show an error message
      }
    }
  return (
    <>
    <div className='p-3 m-3 container bg-secondary'>
        <form>
        <div className="form-group">
    <label  htmlFor="exampleInputEmail1">Email address</label>
    <input value={data.email} name='email' onChange={(e)=>{handleChange(e)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={data.password} name='password' onChange={(e)=>{handleChange(e)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button onClick={(event)=>{
    submit(event)
  }} type="submit" className="btn btn-primary" >Login</button>
 <Link to='/signup'><button type="submit" className="btn btn-danger ml-4 ">I'm a new user</button></Link> 
</form>
    </div>
    </>
  )
}

export default Login