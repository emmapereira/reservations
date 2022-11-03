import Table from 'react-bootstrap/Table';

function BasicTable() {
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
        <tr>
          <td align="left">Double room</td>
          <td>2</td>
          <td>Reserve</td>
        </tr>
        <tr>
          <td align="left">Single room</td>
          <td>1</td>
          <td>Reserve</td>
        </tr>
        <tr>
          <td align="left">Family room</td>
          <td>4</td>
          <td>Reserve</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicTable;