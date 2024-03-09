import React from 'react'

function Cards(props) {


 let option=Object.values(props.option)
 let option1=Object.keys(props.option)
  return (
  <>
 



  
  <div className=" card  m-4">
  <img className="card-img-top" src={props.image}   alt='' style={{"height":"120px"}} />
  <div className="card-body">
    <h5>{props.name}</h5>
    <p className="card-text">{props.desc} </p>
  </div>
<select name="items" id="">

  {
    option.map((i)=>{
    return  <option name="" id="" key={i+1} value={i+1}>{i}</option>
    }
    )
  }
</select>


<select>
 
{
    option1.map((i)=>{
    return  <option name="" id="" key={i+1} value={i+1}>{i}</option>
    }
    )
  }
</select>
<div><button className='btn btn-primary'>Add to cart</button></div>
<div>
  <p>Total cost {}</p>
</div>
</div>
  
  </>
  )
}
export default Cards;
