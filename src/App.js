import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomsTable from './components/RoomsTable/RoomsTable'
import React, { useState } from 'react'
import ReservationBox from './components/ReservationBox/ReservationBox';

function App() {
  //used to recieve data from the child (the rooms table)
  const [selectedRoom, setSelectedRoom] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width:"80%"}}>
          <RoomsTable childToParent={selectedRoom => setSelectedRoom(selectedRoom)}/>
          {(selectedRoom.name === 'Double room' || selectedRoom.name === 'Single room' || selectedRoom.name === 'Family room') 
          && <ReservationBox room={selectedRoom}/>}
        </div>
      </header>
    </div>
  ); 
}

export default App;
