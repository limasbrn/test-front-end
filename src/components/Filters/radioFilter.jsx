import React from "react";

const RadioFilter = ({ name, index, value, setValue }) => {
    
  return (
    <div>
      <input
        onChange={() => {
          setValue(value);
        }}
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <label htmlFor={`${name}-${index}`}> {value} </label>
      
    </div>



  );
};

export default RadioFilter;
