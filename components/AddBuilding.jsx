import React, { useRef, useEffect } from 'react';

function AddBuilding({ buildingList = [], setBuildingList, buildingToUpdate = null }) {
    const codeRef = useRef(null);
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const latitudeRef = useRef(null);
    const longitudeRef = useRef(null);

    useEffect(() => {
        if (buildingToUpdate) {
            codeRef.current.value = buildingToUpdate.code;
            nameRef.current.value = buildingToUpdate.name;
            addressRef.current.value = buildingToUpdate.address;
            latitudeRef.current.value = buildingToUpdate.coordinates.latitude.toString();
            longitudeRef.current.value = buildingToUpdate.coordinates.longitude.toString();
        }
    }, [buildingToUpdate]);

    const findMaxId = () => {
        if (Array.isArray(buildingList)) {
            return buildingList.reduce((max, building) => Math.max(max, building.id), 0);
        }
        return 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBuildingData = {
            code: codeRef.current ? codeRef.current.value : '',
            name: nameRef.current ? nameRef.current.value : '',
            address: addressRef.current ? addressRef.current.value : '',
            coordinates: {
                latitude: latitudeRef.current ? parseFloat(latitudeRef.current.value) : 0,
                longitude: longitudeRef.current ? parseFloat(longitudeRef.current.value) : 0
            }
        };

        if (buildingToUpdate) {
            const updatedBuildings = buildingList.map(building =>
                building.id === buildingToUpdate.id ? { ...building, ...newBuildingData } : building
            );
            setBuildingList(updatedBuildings);
        } else {
            newBuildingData.id = findMaxId() + 1;
            setBuildingList([...buildingList, newBuildingData]);
        }

        codeRef.current.value = '';
        nameRef.current.value = '';
        addressRef.current.value = '';
        latitudeRef.current.value = '';
        longitudeRef.current.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Code: </label>
                <input type="text" ref={codeRef} required />
            </div>
            <div>
                <label>Name: </label>
                <input type="text" ref={nameRef} required />
            </div>
            <div>
                <label>Address: </label>
                <input type="text" ref={addressRef} required />
            </div>
            <div>
                <label>Latitude: </label>
                <input type="text" ref={latitudeRef} required />
            </div>
            <div>
                <label>Longitude: </label>
                <input type="text" ref={longitudeRef} required />
            </div>
            <button type="submit">
                {buildingToUpdate ? "Update Building" : "Add Building"}
            </button>
        </form>
    );
}

export default AddBuilding;
