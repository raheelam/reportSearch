import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from './Header';
import FilesList from './FilesList';
import SearchView from './SearchView';

import files, {sResults} from '../utils/api';

import {getSearchResult} from '../actions';


   
 class HomePage extends React.Component {
  state = {
    isSearchView: false,
    filesList: files,
    counter: 0
  }

  componentDidMount(){
    if(sResults.length > 0){
      this.setState({
        filesList: sResults[0],
        counter: 0
      });
    }
  }

  
   


  handleSearchExclude = (searchTerm) =>{
    let list;
    if (searchTerm) {
      console.log(files);
      
      list = this.props.reports.filter((file) =>file.report.toLowerCase().indexOf(searchTerm.toLowerCase()) < 0 );
      console.log("--",list);
    } else {
      list = this.props.reports;
    }
    sResults.length = 0;
    if(list.length > 0){
      this.props.getSearchResult(list);
      sResults.push([...list]);
    }
    
    this.setState({
      filesList: list,
      counter: 0
    });
  }

  handleSearch = (searchTerm) => {
    let list;
    if (searchTerm) {
      const pattern = new RegExp(searchTerm, 'gi');
      console.log(files);
     
      list = this.props.reports.filter((file) =>file.report.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 )
        .map((file) => {
          return {
            ...file,
            report: file.report.replace(pattern, (match) => {
              return `<mark>${match}</mark>`;
            })
          };
        }).map((file)=>{
          let indx = file.report.split(/[?.!]/);
          //const temp = file.report.replace(indx[0], (match) => {
          //  return `<span class="text-black font-extrabold">${match}</span>`;
         // })
          const first = indx[0] + file.report[indx[0].length];
          indx.unshift();
          indx = indx.join();
          return{ ...file,
            report: `<span class="text-black font-bold">${first} </span><span class="text-gray-800">${indx}</span>`
          }
        })
        /*.map((file)=>{
          const indx = file.report.split(/[?.!]/);
          return{ ...file,
            report: file.report.replace(indx[0], (match) => {
              return `<span class="text-black font-extrabold">${match}</span>`;
            })
          }
        }); */
        
    } else {
      list = this.props.reports;
      this.props.getSearchResult(list);
     
      
    }

    sResults.length = 0;
    if(list.length > 0){
      this.props.getSearchResult(list);
      sResults.push([...list]);
    }
    
    this.setState({
      filesList: list,
      counter: 0
    });
  };
  
  render() {
    const { isSearchView, counter, filesList } = this.state;

    return (
      <div className="container w-screen  m-auto h-screen p-5">
        <Header />
        {isSearchView ? (
          <div className="search-view">
            <SearchView onSearch={this.handleSearch} />
            
            <FilesList
              files={filesList}
              isSearchView={isSearchView}
              counter={counter}
            />
          </div>
        ) : (
          <React.Fragment>
          <Link className="bg-gray-500" to="/add"><p>Add a Report</p></Link>
          <SearchView onSearchExclude={this.handleSearchExclude} onSearch={this.handleSearch} />
          <FilesList files={filesList} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
      reports: state.reports,
      
    }
}
export default connect(mapStateToProps, {getSearchResult})(HomePage);