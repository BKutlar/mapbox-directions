import React from 'react';
import './Popup.css';
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBBtn,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

export default function Popup(props) {
  const soc = "SOC percents ";
 
  
  return <div className="Modale"
    style={{
      transform: props.visible ? 'translateY(0vh' : 'translateY(-100vh))',
      /*opacity: props.visible ? '1' : '0'*/
}}


  >

    <button onClick={props.notview} >x</button>
    <p><button>Languages

      <div >
        <MDBDropdown dropright group>
          <MDBDropdownToggle>Choose</MDBDropdownToggle>
          
          <MDBDropdownMenu>
            <div className='mdb'>
              <MDBDropdownItem>
                <MDBDropdownLink href="#">EN</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"    >FR</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"    >TR</MDBDropdownLink>
              </MDBDropdownItem>
            </div>
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
    </button></p>

    <p><button>{soc}
      <div>
        <MDBDropdown dropright group>
          <MDBDropdownToggle>Choose</MDBDropdownToggle>
          <MDBDropdownMenu>
            <div className="mdb">
              <MDBDropdownItem>
                <MDBDropdownLink href="#">10%</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#">50%</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#" >100%</MDBDropdownLink>
              </MDBDropdownItem>
            </div>
          </MDBDropdownMenu>
        </MDBDropdown>

      </div>
    </button></p>


    <button><p>Notifications time</p>
      <div>
        <MDBDropdown dropright group>
          <MDBDropdownToggle>Choose</MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <div className="mdb">
              <MDBDropdownItem>

                <MDBDropdownLink href="#"    >1s</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"    >2s</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"    >5s</MDBDropdownLink>
              </MDBDropdownItem>
            </div>
          </MDBDropdownMenu>
        </MDBDropdown>

      </div>
      
    </button>

  </div>
}
