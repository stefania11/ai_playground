import React from 'react';
import { NavBar } from './Navigation';
import { Welcome } from './Welcome';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function App() {
  return (
    <div className="homepage">
      <NavBar />
      <Welcome />
      <div className="explorTab">
        <p>{"Explore Activities"}</p>
        <button className="btn border-dark bg-transparent rounded-circle" >
          <KeyboardArrowDownIcon style={{fontSize:40}}/>
        </button>
      </div>



    </div>
  );
}

export default App;
