import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {}

function App({}: React.Props<AppProps>) {
  return (
    <div className={"App"}>
      <header className="App-header">
      </header>
      <ShowMyIP />
    </div>
  );
}

function ShowMyIP(props: {}) {
  const [ ip, setIP ]  = React.useState('<unknown>');
  React.useEffect(() => {
    (async function fetcher() {
      try {
        const response = await fetch('/api/my-ip')
        const text = await response.text();
        setIP(text);
      } 
      catch (xx) {
        setIP(xx.message);
      }
      finally {
        console.log('WTF?!');
      }
    })();
  }, []);
  return <div>{ip}</div>;
}


export default App;

