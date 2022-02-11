import React from 'react';
import './App.css';
import LogiqueModale from './LogiqueModale';
import Modale from './Modale';


function AppModale() {
    const {reval, toggle} = LogiqueModale;

    return(
        <div className="App">
    <button className="settings"
      onClick={(e) => {
        e.preventDefault();
      }}     
      width="100vw"
      height="100vh"
    >
      <img src="parameters.svg" alt='' />  <span>Settings</span>
    </button>
    <Modale
        reval={reval}
        cache={toggle}
    />

    
        </div>
    )
}

export default AppModale;