import React from "react";

const RTag = ({ isActive, tag}) =>{
  const tagColor = isActive? 'green' : 'red';
  const tagClick=()=>{
    if(isActive){
       //remove from the tag list of that report
    }
  }
  
  return (
          <form>
            <button onClick={tagClick} className={tagColor}>#{tag}</button>
          </form>
          );
};

export default RTag;