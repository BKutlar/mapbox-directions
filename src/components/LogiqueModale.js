/*import {useState} from 'react'; 

const LogiqueModale = () => {
    const [reval, setReval] = useState(false);

    function toggle(){
        setReval(!reval);
    }

    return {
        reval,
        toggle
    }
}

export default LogiqueModale; */

import React, { useState } from "react";

export default function App() {
  const [anim, setAnim] = useState(false);

  const classToggle = () => {
    setAnim(!anim);
  };


  
}
