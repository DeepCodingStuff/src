import React, { useState } from 'react';

function BuildingList({ data }) {
  const [filter, setFilter] = useState('');
  const [clickedID, setClickedID] = useState(null);

  const filteredBuildings = data.filter(directory => 
    directory.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleRowClick = (id) => {
    setClickedID(id);
    console.log(`Row with ID ${id} clicked.`);
  }

  const buildingList = filteredBuildings.map(directory => (
    <tr key={directory.id} onClick={() => handleRowClick(directory.id)}>
      <td>{directory.code}</td>
      <td>{directory.name}</td>
    </tr>
  ));

  return (
    <>
      <input 
        type="text" 
        placeholder="Filter buildings..." 
        value={filter} 
        onChange={e => setFilter(e.target.value)}
      />
      {buildingList}
    </>
  );
}

export default BuildingList;
