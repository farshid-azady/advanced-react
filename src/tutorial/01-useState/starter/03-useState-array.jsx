import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
	const[people, setPeople]=useState(data);
  const handleRemoveItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
	return (
		<div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} >
            <h4>{name}</h4>
            <button onClick={() => handleRemoveItem(id)} className="btn">remove</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])} className="  alert-danger" >removeAll</button>
		</div>
	);
};

export default UseStateArray;
