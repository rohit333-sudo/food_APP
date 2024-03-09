import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
function Home() {
  const [item,setItem]=useState([]);
  const [cat,setCat]=useState([]);

  useEffect( ()=>{
    const fetch =async ()=>
    {
      let val=await axios.get("http://localhost:5000/food")
 // console.log(val.data[0],val.data[1])
 setCat(val.data[0])
 setItem(val.data[1])
      
    }
    fetch();
  },[])
  return (
  
<div> 
{
   localStorage.getItem('token')&&cat && cat.map((val,idx)=>{
     return (
      <div className=' mb-3'>    
         <div className='fs-3 m-3 fs-5' key={idx}>{val.CategoryName}</div>
  <hr/>
 <div>
  {
    item && item.filter((val2,idx2)=>val2.CategoryName===val.CategoryName).map((val3,idx3)=>{
      // console.log(val3)
      return(

 <div className='col-md-4 col-6  bg-dark' key={val3.id}>
  <Cards
  name={val3.name}
  image={val3.img}
  option={val3.options[0] }
  desc={val3.description}>
  </Cards>

  </div>
      )
    })
  }
  </div>
  {/* </div> */}
  </div>

     )
    }) 

}
    {/* <Cards fruit="apple"></Cards> */}
    {/* <Cards fruit="mango"></Cards>
    <Cards fruit="orange"></Cards>
    <Cards fruit="pineapple"></Cards> */}

    </div>

    
  )
}

export default Home
// xexg rnsd ohiw tabn