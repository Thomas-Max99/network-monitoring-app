import './App.css';
import useOnline from './components/useOnline.js';
function App() {
  const online=useOnline();
  return (
    <div className="App">
      <h3>Network connection checker</h3>
      <div className="connection-status">
          {
            online ?
            ( <div className="indicator-online" style={{color:"green",fontSize:"2rem"}}>  You are now ONLINE</div>)
            :
            (  <img src="https://i.ibb.co/JBBMmZs/network-status.png" alt="network status"/> )
          }
      </div>
    </div>
  );
}

export default App;
