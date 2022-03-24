import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';

function App() {
  const [permissions, setPermissions] = useState('');
  const getPermissions = async () => {
    const cameraPermission = await navigator.permissions.query({name: 'geolocation'});
    return cameraPermission;
  }
  const executeQuery = useCallback(() => {
    getPermissions().then(value => {
      // alert(value.name + ' ' + value.state)
      setPermissions(value.name + ' ' + value.state)
    }).catch(err => console.error(err))
  }, [])
  executeQuery()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {permissions}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
