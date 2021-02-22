import React from "react";
import {connect} from "react-redux";

import {activateTag, deactivateTag} from "../actions";
//company tags  
const tags = [{id: 1, tag: "good report",color:"green"},{id:2, tag:"condition present", color: "red"}]
//COMPONENT START
const RTag = ({ active, reportTags, disabled, activateTag, deactivateTag, reportId}) =>{

  const inactiveTags = tags.filter(tag => (reportTags.indexOf(tag.id) < 0));
  const activeTags = tags.filter(tag => (reportTags.indexOf(tag.id) >= 0));
 
  //EVENT HANDLERS
  const tagClickR = (event) =>{
    if(disabled !== true){
    const selectedTagId = parseInt(event.target.value[event.target.value.length - 2]);
    deactivateTag({reportId: reportId, selectedTagId: selectedTagId});
    }
  }
  const tagClickA = (event) =>{
    
    const selectedTagId = parseInt(event.target.value[event.target.value.length - 2]);
    activateTag({reportId: reportId, selectedTagId: selectedTagId});
  }
  const showTags = () =>{
    if(active === true){
      return activeTags.map(tag => 
        <button 
            className={`bg-${tag.color}-200 m-1 hover:p-5`}
            value={`#${tag.tag}(${tag.id})`} 
            onClick={tagClickR}  
            key={tag.id}>
            {`#${tag.tag}(${tag.id})`}
        </button>);
    }
      return inactiveTags.map(tag => 
        <button 
            className = {`bg-${tag.color}-200 m-1 hover:p-5`}
            value={`#${tag.tag}(${tag.id})`} 
            onClick={tagClickA}  
            key={tag.id}>
            {`#${tag.tag}(${tag.id})`}
        </button>);
  }
  return showTags();
};






export default connect(null,{activateTag, deactivateTag})(RTag);