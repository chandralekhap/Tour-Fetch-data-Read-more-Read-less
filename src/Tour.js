import React, { useState } from 'react';

const Tour = (props) => {

  
  const [readMore, setReadMore] = useState(false);

  console.log('readmore ' ,readMore)
  return   <div>
  <article className="single-tour">
      <img src={props.tourData.image} alt={props.tourData.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.tourData.name}</h4>
          <h4 className="tour-price">${props.tourData.price}</h4>
          
        </div>
        <p>
        {readMore ?  props.tourData.info : props.tourData.info.substring(0, 100)}
           {readMore ?
           
        <button  onClick = {()=>{ setReadMore(false)}} >
        readLess
        </button> :
        <button  onClick = {()=>{ setReadMore(true)  }} >
        readMore
        </button>
        }
       
        </p>
        <button className="delete-btn" onClick = {()=>(props.removeHandler(props.tourData.id))} >
          not interested
        </button>
       
      </footer>
    </article>
  </div>
}
export default Tour;
