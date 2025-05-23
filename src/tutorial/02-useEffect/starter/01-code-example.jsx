import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const handleClick=()=>{
    setValue(value+1)
    console.log(value)

  }

  
  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
