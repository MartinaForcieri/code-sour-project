
import React from 'react';
import TableItem from './TableItem';
import TableCategory from './TableCategory';
import './ParentComponent.css';

const ParentComponent = () => {
  return (
    <div className="parent-container">
      <div className="table-section">
        <h2>Table Item</h2>
        <TableItem />
      </div>
      <div className="table-section">
        <h2>Table Category</h2>
        <TableCategory />
      </div>
    </div>
  );
};

export default ParentComponent;
