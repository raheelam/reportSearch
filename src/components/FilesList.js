import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

const FilesList = ({ files }) => {
  return (
    <div className="flex flex-col h-3/4 sm:h-4/5 overflow-y-auto">
      {files.length > 0 ? (
        files.map((file, index) => {
          return (
            <ListItem
              key={file.id}
              {...file}
              index={index}
            />
          );
        })
      ) : (
        <div>
          <h3 className="no-result">No matching files found</h3>
        </div>
      )}
    </div>
  );
};

FilesList.propTypes = {
  files: PropTypes.array.isRequired,
};

export default FilesList;
