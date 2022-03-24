import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { UploadDocument } from "./components/Upload/Upload";

function App() {
  const [permissions, setPermissions] = useState(undefined);

  const getMedia = useCallback(async (constraints) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const perms = stream.getTracks().map((item) => item.kind);
      // const storage = await navigator.storage.persisted();
      setPermissions(perms);
      console.log("perms", perms);
      // console.log("storage", storage);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getMedia({ video: true });
  }, [getMedia]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {permissions?.map((item) => (
          <p>{item}</p>
        ))}

        <UploadDocument
          handleHash={(value) => {
            console.log(value);
          }}
        />

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
