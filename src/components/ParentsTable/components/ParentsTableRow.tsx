import React from 'react';
import { Parent } from '../ParentsTable';

interface ParentsTableRowProps {
  parent: Parent;
}

const ParentsTableRow = ({ parent }: ParentsTableRowProps) => {
  return (
    <tr>
      <td>{parent.id}</td>
      <td>{parent.firstName} {parent.lastName}</td>
    </tr>
  );
};

export default ParentsTableRow;
