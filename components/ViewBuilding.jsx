import React from 'react';

function ViewBuilding({clickedID}) {
  // Find the building using clickedID
  const selectedBuilding = buildings.find(b => b.id === clickedID);

  if (!selectedBuilding) {
    return (
      <div>
        <p>
          <i>Click on a name to view more information</i>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>{selectedBuilding.name}</h2>
      <p>Code: {selectedBuilding.code}</p>
      <p>Coordinates: {selectedBuilding.coordinates.latitude}, {selectedBuilding.coordinates.longitude}</p>
      <p>Address: {selectedBuilding.address}</p>
    </div>
  );
}

export default ViewBuilding;