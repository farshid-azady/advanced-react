import { useState } from "react";
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'Random message',
  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'Hello World' });
  };

  return (
    <article>
      <h4>{person.name}</h4>
      <p>{person.age}</p>
      <p>{person.message}</p>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </article>
  );
}

export default UseStateObject;
