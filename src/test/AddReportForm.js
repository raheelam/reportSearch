import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';

import {Report} from './test';


const AddReportForm = () =>{
    const [title, setTitle] = useEffect('');
    const [report, setReport] = useEffect('');
    const [tags, setTags] = useEffect(0);
    const onSubmitHandler = (event) =>{
       event.preventDefault();
       const n = new Report(title, report, tags);
       n.addReport();
       
    }
    return(
        <div className="w-4/5 m-auto my-9">
        <form onSubmit={onSubmitHandler} className="m-auto">
            <label for="rtitle">Report title: </label><br></br>
            <input className="w-1/2" value={title} onChange={(e)=>setTitle(e.target.value)} type="text" id="title" max="35" /><br></br>
            <label for="report">Report: </label><br></br>
            <input className="w-1/2 h-16" value={report} onChange={(e)=>setReport(e.target.value)} type="textarea" id="report" /><br></br>
            <label for="tags">Tags: </label><br></br>
            <input value={tags} onChange={(e)=>{
                if(e.target.value){
                    setTags(e.target.value)
                }
                }} type="checkbox" id="tags" value="1"/>good report <br></br>
            <input  value={tags} onChange={(e)=>{
                if(e.target.value){
                    setTags(e.target.value)
                }
                }} type="checkbox" id="tags" value="2"/>condition present<br></br>
            <button type="submit">Save</button>
        </form>
        </div>
    );
}

export default connect(null)(AddReportForm);