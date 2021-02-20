import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {activateTag, deactivateTag} from "../actions";

const tags = [{id: 1, tag: "hello"},{id:2, tag:"wedidit"},{id:3,tag:"#whatever"}]
const ReportDetail = (props) =>{
    
    const product = props.reports.find(file => file.id.toString() === props.match.params.id.toString());
    console.log(product);
    const inactiveTags = tags.filter(tag => (product.tags.indexOf(tag.id) < 0));
    const activeTags = tags.filter(tag => (product.tags.indexOf(tag.id) >= 0));

    const tagClickR = (event) =>{
        const selectedTagId = parseInt(event.target.value[event.target.value.length - 2]);
        console.log(selectedTagId);
        props.deactivateTag({reportId: props.match.params.id, selectedTagId: selectedTagId});
        
       
       

     }

     const tagClickA = (event) =>{
        const selectedTagId = parseInt(event.target.value[event.target.value.length - 2]);
        console.log(selectedTagId);
        props.activateTag({reportId: props.match.params.id, selectedTagId: selectedTagId});
        /*const selectedTagId = event.target.value[event.target.value.length - 2];
        console.log(selectedTagId);
        const tempFiles =  files.map(report => {
            if(report.id.toString() === props.match.params.id.toString()){
              report.tags = [...report.tags, selectedTagId];
              return report;
        }else{
            return report;
        }});
        console.log(tempFiles);
        files.length = 0;
        files.concat(tempFiles); */
        
 
      }
    return(
        <div className="ui container">

        
          <div className="ui grid">
            <div className="ten wide column ">
                {product.report}
            </div>
            <div  className="six wide column ">
                <div>
                     <h1>Active tags</h1>
                     {
                        activeTags.map(tag => <button value={`#${tag.tag}(${tag.id})`} onClick={tagClickR} className="primary" key={tag.id}>{`#${tag.tag}(${tag.id})`}</button>)
                     }
                </div>
                <div>
                     <h1>Inactive tags</h1>
                     {
                        inactiveTags.map( tag => <button value={`#${tag.tag}(${tag.id})`} onClick={tagClickA} className="primary" key={tag.id}>{`#${tag.tag}(${tag.id})`}</button>)
                     }
                </div>      
            </div>
          </div>
          <Link className="ui btn " to="/">GO BACK</Link>
        </div>
    );
}
   const mapStateToProps = (state) =>{
       console.log(state.reports);
        return{
            reports: state.reports
        }
    }
export default connect(mapStateToProps, {activateTag, deactivateTag})(ReportDetail);