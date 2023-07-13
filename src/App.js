import React from 'react';
import AppNotes from './AppNotes';
import ViewText from "./viewText";
import InputText from "./inputText";
import styles from "./App.module.css"
import { useState } from "react";

import {  GrpProvider } from './GrpContext';


 export default function App() {
  const [inGroupClicked, setGroupClicked] = useState(false)

  const handleGroupClick = () => {
    setGroupClicked(true);
  };

  return (
    <GrpProvider>
      <div className={styles.main}>
        <AppNotes handleGroupClick={handleGroupClick} />
        {!inGroupClicked && <ViewText handleGroupClick={handleGroupClick} />}
        {inGroupClicked && <InputText />}
      </div>
    </GrpProvider>

  );
}


