import React, { useState } from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

function App({ data }) {
  // TODO: Update the following two variables to use the useState() hook
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0);
  const [clickedID, setClickedID] = useState(0);
  const [buildings, setBuildings] = useState(data);

  function filterUpdate(value) {
  setFilterText(value);
  }

  function selectedUpdate(id) {
    setSelectedBuilding(id);
  }

  const removeBuilding = (id) => {
    const updatedBuildings = buildings.filter(building => building.id !== id);
    setBuildings(updatedBuildings);
    if (selectedBuilding === id) { 
      setSelectedBuilding(0);
    }
  }

  return (
    <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>
      {/* TODO: Edit Search component to include necessary props */}
      <Search />
      <main>
        <div className="row">
          <div className="column1">
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <td>
                    <b>Code Building</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Edit BuildingList component to include necessary props */}
                <BuildingList
                    data={buildings}
                  clickedID={clickedID}
                  onBuildingClick={id => setClickedID(id)}
                />
              </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
            <ViewBuilding 
            data={buildings}
            clickedID={clickedID}
            />
          </div>
        </div>
        <Credit />
        <AddBuilding buildingList={buildings} setBuildingList={setBuildings} />
        <RemoveBuilding clickedID={clickedID} removeBuilding={removeBuilding} />
      </main>
    </div>
  );
}

export default App;
