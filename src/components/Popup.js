import React from 'react';
import './Popup.css';
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBDropdownSelect,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

export default function Popup(props) {
  const soc = "SOC percents ";
 
  
  return <div className="Modale"
    style={{
      transform: props.visible ? 'translateY(0vh' : 'translateY(-100vh)',
      /*opacity: props.visible ? '1' : '0'*/
}}


  >

    <button onClick={props.notview} >x</button>
    <p><button>Languages

      <div >
        <MDBDropdown dropright group>
          <MDBDropdownToggle>Choose</MDBDropdownToggle>
          <MDBDropdownMenu>
            <div className="mdb">
              <MDBDropdownItem>
                <MDBDropdownLink href="#"  class="nav nav-pills nav-stacked">EN</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"  class="nav nav-pills nav-stacked">FR</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"  class="nav nav-pills nav-stacked">TR</MDBDropdownLink>
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
                <MDBDropdownLink href="#"  class="nav nav-pills nav-stacked">10%</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"  class="nav nav-pills nav-stacked">50%</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"  class="nav nav-pills nav-stacked">100%</MDBDropdownLink>
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

                <MDBDropdownLink href="#"  class="nav nav-pills nav-stacked">1s</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"  class="nav nav-pills nav-stacked">2s</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#"  class="nav nav-pills nav-stacked">5s</MDBDropdownLink>
              </MDBDropdownItem>
            </div>
          </MDBDropdownMenu>
        </MDBDropdown>

      </div>
      
    </button>

  </div>
}
