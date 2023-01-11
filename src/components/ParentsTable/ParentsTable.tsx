import React, { useCallback, useMemo, useState } from 'react';
import ParentsTableRow from './components/ParentsTableRow';

export interface Parent {
  id: string;
  firstName: string;
  lastName: string;
}

const parents: Parent[] = [
  {
    id: 'ID_01',
    firstName: 'Karel',
    lastName: 'Novák'
  },
  {
    id: 'ID_02',
    firstName: 'Jakub',
    lastName: 'Svoboda'
  },
  {
    id: 'ID_03',
    firstName: 'Anna',
    lastName: 'Veselá'
  },
  {
    id: 'ID_04',
    firstName: 'Karel',
    lastName: 'Nový'
  }
];

const ParentsTable = () => {
  const [fulltext, setFulltext] = useState('');

  const find = useCallback((parent: Parent): boolean => (
    fulltext === '' ? true : `${parent.firstName} ${parent.lastName}`.toLowerCase().search(fulltext.toLowerCase()) !== -1
  ), [fulltext]);

  const parentsFound = useMemo(() => parents.filter(find), [find]);

  const onFulltextChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setFulltext(value);
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <label>
        Vyhledávání:<br />
        <input type="text" value={fulltext} onChange={onFulltextChange} />
      </label>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {parentsFound.map((parent: Parent) => <ParentsTableRow key={`parent-${parent.id}`} parent={parent} />)}
        </tbody>
      </table>
    </div>
  );
};

export default ParentsTable;
