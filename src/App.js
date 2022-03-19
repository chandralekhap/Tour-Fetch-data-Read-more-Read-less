import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {

  const [loading , setLoading]= useState(false)
  const[tours, setTours] = useState([])

  const fetchApi =  async () => {
 
    
    try{
      setLoading(true);
    const response = await fetch (url);
    const Tours = await response.json();
 // setTours((prevTour)=>([...prevTour, ...Tours]));
  
  setTours(Tours);
  setLoading(false);
   
    }catch (e){

      console.log(e);
      setLoading(false)
    }
  }
  
  console.log(tours, loading)
  useEffect(()=>{
  
      fetchApi()
  },[])
if(loading)
{
  return (
  <main>
  {loading && <Loading/>}
   </main>
  )
}
  const removeHandler = (id)=>{

    console.log('in removeHandler')
    const remainingTours = tours.filter((item)=>(item.id!==id))
    setTours(remainingTours);
        }
        if (tours.length === 0) {
          return (
            <main>
              <div className='title'>
                <h2>no tours left</h2>
              
              </div>
            </main>
          )
        }
      
  return <div>

 <div>{tours && <Tours tourItem = {tours} removeHandler = {removeHandler}/>} </div>

  </div>
}

export default App
