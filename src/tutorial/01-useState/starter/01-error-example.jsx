import { useState } from "react";

const ErrorExample = () => {
  // console.log(useState())
  // console.log(useState(1))
  // const value=(useState('jo koy'))
  // console.log(value[0])
  // console.log(value[1])
  const[count,setCount]=useState(0);
  // let count=0
  const handleClick = () => {
    setCount(count+1)
    // console.log(count);
  }
  return <div>
    <h2>{count}</h2>
    <button type='button' className='btn' onClick={handleClick}
    
    >increment</button>


  </div>;
};

export default ErrorExample;
