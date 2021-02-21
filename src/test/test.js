const fs = require('fs');

const report = [{id: 4, report:"blah blah  blah", tags:[2]}];
export class Report{
    static counter = 0;
    constructor(title,report,tags){
        Report.counter++;
        this.id = Report.counter;
        this.title = title;
        this.report = report;
        this.tags = tags;
        this.createdAt = Date.now();
    }
    //{this.id,this.title,this.report,this.tags,this.createdAt}
    static editReports = (editedReports) =>{
        fs.writeFile('./reports.json', JSON.stringify(editedReports), (err)=>err?console.log(err):'');
    }
    //call editReport after re-rending report detail page
    addReport = () =>{
        fs.readFile('./reports.json', (err, data)=>{
            if(err){
                console.log(err);
            }else{
               const reports = JSON.parse(data);
               const newRid = reports.length > 0? reports[reports.length - 1].id + 1: 1;
               reports.push({...this, id: newRid });
               fs.writeFile('./reports.json', JSON.stringify(reports), (err)=>err?console.log(err):'');
            }
        });
    }


}




