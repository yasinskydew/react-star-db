import React from 'react';

import 'C:/Users/vova/Desktop/n3-12-12/react-apps/react-star-db/src/components/row/row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
};

export default Row;
