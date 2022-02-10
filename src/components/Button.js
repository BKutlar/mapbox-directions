import React, {useState} from 'react';
import './Boutton.css';
import Overlay from './Overlay';
import Popup from './Popup';
import SOC from './SOC';
import LogiqueModale from './LogiqueModale';
import Modale from './Modale';


export default class Button extends React.Component  {

    state= {
        visible: false
    }

    view = () => {
        this.setState({
            visible: true
        })
    }

    notview = () =>{
        this.setState({
            visible: false
        })
    }
    render() {
     
      
      return (<div className="actions">
  <button className="book"
      onClick={(e) => {
        e.preventDefault();
      }}
      width="100vw"
      height="100vh"
    >
      

      <img src="charger.svg" alt=""/> <span>Book a charge</span>

    </button>

    <button className="settings"
      onClick={(e) => {
        e.preventDefault();
      }}
      onClick={this.view}  
      
     
      width="100vw"
      height="100vh"
    >
      <img src="parameters.svg" alt='' />  <span>Settings</span>

      

    </button>

    <Popup
    
      visible={this.state.visible}
      notview={this.notview}>
      
      </Popup>

 
    </div>

    )
}
    }