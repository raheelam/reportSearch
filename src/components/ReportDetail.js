import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link, useHistory} from "react-router-dom";

import {sResults} from "../utils/api"

import {NUMBER_ONE_CODE,NUMBER_TWO_CODE} from '../utils/keyCodes';
import {activateTag, clearTags} from "../actions";

import RTag from "./RTag";


const ReportDetail = ({report, results, reports, activateTag, clearTags}) =>{
  let history = useHistory();
   
 //handling events 
  useEffect(()=>{
    const eventHandler = (event) =>{
      const keyCode = event.key;
      switch (keyCode) {
        case "1":
          activateTag({reportId: report.id, selectedTagId: 1});
          break;
        case "2":
          activateTag({reportId: report.id, selectedTagId: 2});
          break;
        case "Delete":
          clearTags(report.id);
          break;
        case "ArrowLeft":
          history.push(`/report/${prev}`);
          break;
        case "ArrowRight":
          history.push(`/report/${next}`);
          break;
        default:
          break;
      }
     
  }
    window.addEventListener('keydown', eventHandler);
    return ()=>{
      window.removeEventListener('keydown', eventHandler);
    }
  },[report]);
 

  

    console.log('======',report, "===");
    console.log('======',results, "===");
    const ind = results.findIndex(r => r.id === report.id);
    const prev = (ind === 0 && (results.length > 1))? report.id : results[ind - 1].id;
    const next = (ind === (results.length - 1)) ? report.id  : results[ind + 1].id;
    console.log(ind);

    return(
        <div className="container w-screen  m-auto h-screen p-5">
          
          <div className="bg-gray-100 grid grid-cols-12 box-border border-4  w-full h-4/5 sm:h-3/5">
            <div className=" col-span-12 sm:col-span-7  sm:border-r-4 p-5 overflow-y-auto">
                <h1 className="text-xl font-bold">{`Report ${report.id}`}</h1>
                {report.report}
               
            </div>
            <div  className=" overflow-y-auto relative col-span-12 sm:col-span-5 border-t-4 sm:border-t-0  p-5">
                <div>
                     <h1 className="font-semibold">Active tags</h1>
                     {
                       <RTag active={true} reportTags={report.tags} reportId={report.id}  />
                     }
                </div>
                <div>
                     <h1 className="font-semibold">Inactive tags</h1>
                     {
                        <RTag reportTags={report.tags} reportId={report.id}  />
                     }
                </div>
                <Link className="" to={`/report/${prev}`}><button className="mr-2 p-1 hover:bg-purple-400 border-2 absolute right-20 sm:left-1 bottom-7 ">Prev</button></Link>
                
                <Link className="" to={`/report/${next}`}><button className="border-2 p-1  hover:bg-purple-400 absolute right-1 sm:left-20 bottom-7 ">Next</button></Link>
                <p className="absolute bottom-0 text-gray-400 ">Click on a tag to add or remove it.</p>    
            </div>
          </div>
          <div className="text-center mt-5 ">
          <Link className="my-5 p-3 bg-purple-200 transition-colors duration-150 focus:shadow-outline hover:bg-purple-400 rounded-lg border-4 text-center" to="/">CLOSE</Link>
          </div>
        </div>
    );
}
   const mapStateToProps = (state, ownProps) =>{
       let report;
       let result;
       console.log("====",sResults);
       report = state.reports.find(report => report.id.toString() === ownProps.match.params.id.toString());
      if(sResults.length > 0){
        // report = sResults[0].find(report => report.id.toString() === ownProps.match.params.id.toString());
         result = sResults[0];
       }else{
        result= state.reports;
      } 
        
        console.log(report);
        return{
            results: result, 
            report: report, 
            reports: state.reports,

        }
    }
export default connect(mapStateToProps,{activateTag, clearTags})(ReportDetail);