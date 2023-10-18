import React, { useState } from 'react';

function BuildingList({ data, clickedID, onBuildingClick }) {
  const [filter, setFilter] = useState('');

  const filteredBuildings = data.filter(directory => 
    directory.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleRowClick = (id) => {
    onBuildingClick(id);  // Use the prop function to notify the parent about the selected building
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
