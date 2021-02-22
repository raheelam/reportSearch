import React from 'react';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';
import RTag from './RTag'

const ListItem = ({
  index,
  report,
  id,
  tags
}) => {
  

  return (
    <React.Fragment>
    <Link  className=" my-0.5  border-2 hover:bg-green-500 itemss" to={`/report/${id}`}>
    <p className="whitespace-nowrap font-semibold "><b>{`Report ${id}  `}</b></p>
      <div className={`grid grid-cols-12 `}>
        
        
          <p
            className="truncate col-span-9"
            dangerouslySetInnerHTML={{ __html: report }}
          ></p>
          <p className=" truncate col-span-3 text-right"><RTag disabled={true} active={true} reportId={index+1} reportTags = {tags} /></p>
          
            
        
      
      </div>
      </Link>
    </React.Fragment>
  );
};

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  report: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default ListItem;
