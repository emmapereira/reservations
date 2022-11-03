import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTable from './components/Table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width:"80%"}}>
          <BasicTable/>
        </div>
      </header>
    </div>
  ); 
}

export default App;
