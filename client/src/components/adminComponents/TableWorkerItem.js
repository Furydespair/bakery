import React from 'react';

const TableWorkerItem = ({worker}) => {
    return (
        <tr>
          <td>{worker.id}</td>
          <td>{worker.email}</td>
          <td>{worker.role}</td>
        </tr>
    );
};

export default TableWorkerItem;