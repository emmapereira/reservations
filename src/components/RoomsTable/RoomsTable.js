import Table from 'react-bootstrap/Table';
import RoomData from '../../data/rooms.json';
import './RoomsTable.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReservationBox from '../ReservationBox/ReservationBox';

/*
 
 <td onClick={()=>{setRoom(info)}}>Reserve</td>
 
 const onRoomClick=(room)=>{
    //setSelectedRoom(room)
    console.log(room.id)
}

const [room, setRoom] = useState('');

  const openBox=(infoRoom)=>{
    //setSelectedRoom(room)
    console.log(infoRoom.id)
    
    return(
      <ReservationBox>
        room = {infoRoom}
      </ReservationBox>
    )
    setRoom(room = infoRoom);
  }

<td onClick={()=>{openBox(infoRoom)}}>Reserve</td>
  //const room = useSelector((state) => state.RoomData)

 */

function RoomsTable(props) {
  
  //display the data for each room
  const DisplayData=RoomData.map(
    (infoRoom)=>{
        return(
            <tr key={infoRoom.key}>
                <td align='left'>{infoRoom.name}</td>
                <td>{infoRoom.numberOfPeople}</td>
                <td onClick={()=>props.childToParent(infoRoom)}>Reserve</td>
            </tr>
        )
    }
)
return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th align="left !important">Room</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {DisplayData}
      </tbody>
    </Table>
  );
}

export default RoomsTable;