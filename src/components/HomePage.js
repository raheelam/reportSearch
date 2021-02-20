import React from 'react';
import Header from './Header';
import FilesList from './FilesList';
import SearchView from './SearchView';
import {
  ESCAPE_CODE,
  HOTKEY_CODE,
  UP_ARROW_CODE,
  DOWN_ARROW_CODE
} from '../utils/keyCodes';
import files from '../utils/api';
import InfoMessage from './InfoMessage';

export default class HomePage extends React.Component {
  state = {
    isSearchView: false,
    filesList: files,
    counter: 0
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEvent);
  }

  handleEvent = (event) => {
    const { filesList, counter } = this.state;
    const keyCode = event.keyCode || event.which;

    switch (keyCode) {
      case HOTKEY_CODE:
        this.setState((prevState) => ({
          //isSearchView: true,
          //filesList: prevState.filesList.filter((file) => file.type === 'file')
        }));
        break;
      case ESCAPE_CODE:
        this.setState({ isSearchView: false, filesList: files });
        break;
      case UP_ARROW_CODE:
        if (counter > 0) {
          this.setState({ counter: counter - 1 });
        }
        break;
      case DOWN_ARROW_CODE:
        if (counter < filesList.length - 1) {
          this.setState({ counter: counter + 1 });
        }
        break;
      default:
        break;
    }
  };

  handleSearchExclude = (searchTerm) =>{
    let list;
    if (searchTerm) {
      const pattern = new RegExp(searchTerm, 'gi');
      console.log(files);
      list = files.filter((file) =>file.report.toLowerCase().indexOf(searchTerm.toLowerCase()) < 0 );
       
    } else {
      list = files;
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
      list = files.filter((file) =>file.report.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 )
        .map((file) => {
          return {
            ...file,
            report: file.report.replace(pattern, (match) => {
              return `<mark>${match}</mark>`;
            })
          };
        });
    } else {
      list = files;
    }

    this.setState({
      filesList: list,
      counter: 0
    });
  };

  render() {
    const { isSearchView, counter, filesList } = this.state;

    return (
      <div className="container">
        <Header />
        {isSearchView ? (
          <div className="search-view">
            <SearchView onSearch={this.handleSearch} />
            <InfoMessage />
            <FilesList
              files={filesList}
              isSearchView={isSearchView}
              counter={counter}
            />
          </div>
        ) : (
          <React.Fragment>
          
          <SearchView onSearchExclude={this.handleSearchExclude} onSearch={this.handleSearch} />
          <FilesList files={filesList} />
          </React.Fragment>
        )}
      </div>
    );
  }
}
