
import React from 'react';
import ProgressStep from './components/ProgressStep';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <h1>Progress Steps</h1>
      <div className="progress-container">
        <ProgressStep label="Step 1" active />
        <ProgressStep label="Step 2" />
        <ProgressStep label="Step 3" />
        <ProgressStep label="Step 4" />
      </div>
    </div>
  );
}

export default App;
