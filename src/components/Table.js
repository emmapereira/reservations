import Table from 'react-bootstrap/Table';
import JsonData from '../data/rooms.json';

function BasicTable() {
  const DisplayData=JsonData.map(
    (info)=>{
        return(
            <tr>
                <td align='left'>{info.name}</td>
                <td>{info.numberOfPeople}</td>
                <td>Reserve</td>
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

export default BasicTable;