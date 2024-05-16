// import React from 'react'
// import { useEffect } from 'react'

// const Timer = () => {
// useEffect(()=>{
// let time=setInterval(()=>{
// let myTime=Date.now()
// console.log(myTime)
// },1000)
// return ()=>clearInterval(time)
// },[])

//   return (
//     <div>
//       {Timer}
//     </div>
//   )
// }

// export default Timer


import React, { useEffect } from 'react';

const TimerComponent = () => {
  useEffect(() => {
    const timer = setInterval(() => {
       
      
      console.log('Timer tick');
    }, 1000);

     
     return ()=> clearInterval(timer)
     
     
  }, []); // Empty dependency array ensures the effect runs only once

  return <div>Timer Componenet 
     
  </div>;
};

export default TimerComponent;
