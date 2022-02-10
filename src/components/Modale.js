import React, {useState} from 'react';

function Modale() {
    const [soc, setSoc] = useState(false);

    return(
        <div>

            <button onClick={()=> this.setSoc(true)}>
                100%
            </button>
        </div>
    )
}

export default Modale; 


/*import React from 'react';
import './App.css';

const Modale = ({reval, cache}) => reval ? (

    <React.Fragment>
        <div className="overlay"/>

        <div className="wrapper">
            
            <div className="modal">
                <button type="button" className="close" onClick={cache}>
                    <span>&times;</span>
                </button>

                


            </div>
            
            </div> 

    </React.Fragment>
) : null;


export default Modale;*/

