import React, { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyVal, bigKey }) {
    const { 
        onSelectLetter, 
        onDeleteLetter, 
        onEnter 
    } = useContext(AppContext);

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DELETE") {
            onDeleteLetter();
        } else {
            onSelectLetter(keyVal);
        }
    }
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}

export default Key
