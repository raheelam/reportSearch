import fs from "fs";

class Report{
    static counter = 0;
    Report(report, date, tag){
        counter++;
        this.id = counter;
        this.report = report;
        this.date = date;
        this.tag = tag;
    }

    saveToFile(){
      const report = fs.readFileSync('./report.txt', (err, report)=>{
          if(err){
              console.log(err);
          }else{
            report = report.toString();
            const data = [
                {report: report,
                 id: this.id,
                 tag: this.tag
                }


            ]
            fs.writeFileSync('./reports.txt', data.toString(), (err)=>{
                if(err){
                    console.log(err);
                }
            })
          }
      } );

      

    }
}

const test = new uploadReport("gshd", "5-4-5", "tagggie");
test.saveToFile();