import React, {useState} from 'react';
import './Popup.css';
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export default function Popup(props) { 
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const soc = "SOC percents ";
  return <div className="Modale"
    style={{
      transform: props.visible ? 'translateY(0vh' : 'translateY(-100vh)',
      /*opacity: props.visible ? '1' : '0'*/
}}
 
  >

    <button onClick={props.notview} 
   type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  >
        </button>
    <p><button className="write">Languages

      <div >
        <MDBDropdown dropright group>
          <MDBDropdownToggle >Choose</MDBDropdownToggle>
          
          <MDBDropdownMenu>
            <div className='mdb' class="btn btn-primary btn-blue" >
              <MDBDropdownItem>
               <MDBBtn onClick={toggleShow}> <MDBDropdownLink href="#">EN </MDBDropdownLink></MDBBtn>
               <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Modal body text goes here.</MDBModalBody>

            
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
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

    <p><button className="write" >{soc}
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


    <p><button className="write">Notifications time
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
    </p>

  </div>
}
