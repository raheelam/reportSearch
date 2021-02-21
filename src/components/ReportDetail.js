import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {sResults} from "../utils/api"



import RTag from "./RTag";

const ReportDetail = ({report, results, reports}) =>{
  
    console.log('======',report, "===");
    const ind = results.findIndex(r => r.id === report.id);

    return(
        <div className="container w-screen  m-auto h-screen p-5">
          
          <div className="bg-gray-100 grid grid-cols-12 box-border border-4  w-full h-4/5 sm:h-3/5">
            <div className=" col-span-12 sm:col-span-7  sm:border-r-4 p-5">
                <h1 className="text-xl font-bold">{`Report ${report.id}`}</h1>
                {report.report}
                <Link className="" to={`/report/${(ind === 0 && (results.length !== 1))? report.id  :results[ind - 1].id}`}><p>Prev</p></Link>
                
                <Link className="" to={`/report/${(ind === (results.length - 1)) ? report.id  : results[ind + 1].id}`}><p>Next</p></Link>
            </div>
            <div  className=" relative col-span-12 sm:col-span-5 border-t-4 sm:border-t-0  p-5">
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
                <p className="absolute bottom-0 text-gray-400 ">Click on a tag to add or remove it.</p>    
            </div>
          </div>
          <div className="text-center mt-5 ">
          <Link className="my-5 p-3 bg-gray-100 transition-colors duration-150 focus:shadow-outline hover:bg-gray-800 rounded-lg border-4 text-center" to="/">CLOSE</Link>
          </div>
        </div>
    );
}
   const mapStateToProps = (state, ownProps) =>{
       let report;
       let result;
       console.log("====",sResults);
      if(sResults.length > 0){
        // report = sResults[0].find(report => report.id.toString() === ownProps.match.params.id.toString());
         report =state.reports.find(report => report.id.toString() === ownProps.match.params.id.toString());
         result = sResults[0];
         
       }else{
        report = state.reports.find(report => report.id.toString() === ownProps.match.params.id.toString());
        result= state.reports;
      } 
        
        console.log(report);
        return{
            results: result, 
            report: report, 
            reports: state.reports,

        }
    }
export default connect(mapStateToProps)(ReportDetail);