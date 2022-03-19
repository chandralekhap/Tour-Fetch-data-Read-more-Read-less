import React from 'react';
import Tour from './Tour';
const Tours = (props) => {

 // console.log('props in tours', props.tourItem[0].id)
  return <div>
{
  props.tourItem.map((item)=>(

   
    <Tour  tourData = {item} removeHandler = {props.removeHandler}/>
  ))
}
  </div>
};

export default Tours;
