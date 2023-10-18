import React from 'react';

function ViewBuilding({ clickedID, data }) {
  const selectedBuilding = data.find(b => b.id === clickedID);

  if (!selectedBuilding) {
    return (
      <div>
        <p>
          <i>Click on a name to view more information</i>
        </p>
      </div>
    );
  }

  const latitude = selectedBuilding.coordinates && selectedBuilding.coordinates.latitude ? selectedBuilding.coordinates.latitude : 'N/A';
  const longitude = selectedBuilding.coordinates && selectedBuilding.coordinates.longitude ? selectedBuilding.coordinates.longitude : 'N/A';

  return (
    <div>
      <h2>{selectedBuilding.name}</h2>
      <p>Code: {selectedBuilding.code}</p>
      <p>Coordinates: {latitude}, {longitude}</p>
      <p>Address: {selectedBuilding.address}</p>
    </div>
  );
}


ViewBuilding.defaultProps = {
  data: []
};

export default ViewBuilding;
