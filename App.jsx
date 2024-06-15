import React from 'react';
import { GithubUsers } from './components/GithubUsers';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <h1>GitHub User Search</h1>
            <GithubUsers />
         </header>
      </div>
   );
}

export default App;
