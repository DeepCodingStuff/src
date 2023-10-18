import React from 'react';

const RemoveBuilding = ({ clickedID, removeBuilding }) => {
    const handleRemove = () => {
        removeBuilding(clickedID);
    }

    return (
        <button onClick={handleRemove}>
            Remove Building
        </button>
    );
}

export default RemoveBuilding;