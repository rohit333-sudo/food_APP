import React, { useState } from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom'
function SignUp() {
const [data,setData]=useState({email:'',password:"",cpassword:""});
const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value})
// alert(data.password)
}  
const submit = async (event)=>
{
    event.preventDefault();
    alert(data.password)
    try
    {
    const response = await axios.post('http://localhost:5000/signup',data);

      console.log('Server response:', response.data);
    } catch (error) {
        console.error('Axios error msg:', error);
        // Handle error: for example, show an error message
      }

//    // Data to be sent (example JSON object)
// console.log('on clicked')
  
  // Fetch options to send a POST request with JSON data
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json' // Set the Content-Type to JSON
//     },
//     body: JSON.stringify(data) // Convert object to JSON string
//   };
  
//   // Make the fetch request
//  await fetch('https://localhost:4000/api/signup', requestOptions).then(data => {
//       // Handle the response from the server
//       console.log('Response from server:', data);
//     }) 
//     .catch(error => {
//       // Handle errors that occurred during the fetch
//       console.error('Fetch error:', error);
//     });
  
}
  return (
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
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Confirm Password</label>
    <input value={data.cpassword} name='cpassword' onChange={(e)=>{handleChange(e)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button onClick={(event)=>{
    submit(event)
  }} type="submit" className="btn btn-primary" >SignUp</button>
 <Link to='/login'><button type="submit" className="btn btn-danger ml-4 ">Already a user ?</button></Link> 

</form>
    </div>
  )
}

export default SignUp