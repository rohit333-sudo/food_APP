import React from 'react'


function Carousel() {
  let url='https://source.unsplash.com/random/900x700/?apple';
  let url1='https://source.unsplash.com/random/900x700/?mango';
  let url2='https://source.unsplash.com/random/900x700/?orange';


  return (
  <>
 <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={url} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={url1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={url2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
  )
}

export default Carousel