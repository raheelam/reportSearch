import React from 'react';
import moment from 'moment';
import { AiFillFolder, AiOutlineFile, AiOutlineRight } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';

const ListItem = ({
  index,
  report,
  tag,
  modified_time,
  isSearchView,
  counter
}) => {
  const isSelected = counter === index;

  return (
    <React.Fragment>
    <Link to={`/report/${index + 1}`}>
      <div className={`list-item ${isSelected ? 'active' : ''}`}>
        <div className="file">
         <span className="label">{`Report ${index + 1}`}</span>
          <div 
            className="report"
            dangerouslySetInnerHTML={{ __html: report }}
          ></div>
        </div>
      
      </div>
      </Link>
    </React.Fragment>
  );
};

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  report: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  modified_time: PropTypes.string.isRequired,
  isSearchView: PropTypes.bool,
  counter: PropTypes.number
};

export default ListItem;
