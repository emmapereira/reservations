import Table from 'react-bootstrap/Table';
import RoomData from '../../data/rooms.json';
import './RoomsTable.css';

function RoomsTable(props) {
  
  //display the data for each room
  const DisplayData=RoomData.map(
    (infoRoom)=>{
        return(
            <tr key={infoRoom.key}>
                <td>{infoRoom.name}</td>
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
          <th>Room</th>
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