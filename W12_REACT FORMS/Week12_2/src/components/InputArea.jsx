import React, { useState } from 'react';
import TodoItem from './ToDoItem';

export default function InputArea() {
  const [instances, setInstances] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue !== '') {
      const newInstances = [...instances, <TodoItem name={inputValue} key={instances.length} />];
      setInstances(newInstances);
      setInputValue('');
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add</button>
      {instances.map((instance) => instance)}
    </div>
  );
}
