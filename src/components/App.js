import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
import ReportDetail from './ReportDetail';


const App = () => {
   
    return(
        
        <div className="ui container">
            <BrowserRouter>
      
          
          <Route path="/" exact component={HomePage} />
          <Route path="/report/:id" exact component={ReportDetail} />
         
          
          
          
       
      </BrowserRouter>
                      
                  
            
        </div>
    );
}

export default App;