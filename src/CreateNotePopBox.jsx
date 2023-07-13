import React from "react";
import PropTypes from "prop-types";
import styles from "./PopBox.module.css"
//import aqua from "./assets/aqua.png"
import blue from"./assets/blue.svg"
import lavender from "./assets/lavender.svg"
import peach from "./assets/peach.svg"
import pink from "./assets/pink.svg"
import skyBlue from "./assets/skyBlue.svg"


const CreateNotePopBox = ({
    groupName,
    selectColor,
    onSubmit,
    setGrpName,
    setSelectImage,
    selectImage, 
}) => {
    const hdlCrte =() =>{
        onSubmit(groupName,selectColor,selectImage);
    };

    const hdlImgClk = (image) =>{
        setSelectImage(image);
    };

    return(
        <div className={styles.popup}>
      <div className={styles.modal}>
        <h2 className={styles.modHeading}>Create New Notes Group</h2>
        <div className={styles.lab}>
          <label  className={styles.labell}>Group Name:</label>
          <input
            id="group-name"
            type="text"
            placeholder="Enter your note name..."
            value={groupName}
            onChange={(e) => setGrpName(e.target.value)}
            className={styles.putin_mobile}
          />
          <br />

          <div className={styles.column_wrap}>
            <label  className={styles.label_color}>
              Choose colour:
            </label>
            <div className={styles.different_color}>
              <img
                src={lavender}
                className={styles.column}
                onClick={() => hdlImgClk(lavender)}
              />
              <img
                src={pink}
                className={styles.column}
                onClick={() => hdlImgClk(pink)}
              />
              {/* <img
                src={aqua}
                className={styles.column}
                onClick={() => hdlImgClk(aqua)}
              /> */}
              <img
                src={peach}
                className={styles.column}
                onClick={() => hdlImgClk(peach)}
              />
              <img
                src={blue}
                className={styles.column}
                onClick={() => hdlImgClk(blue)}
              />
              <img
                src={skyBlue}
                className={styles.column}
                onClick={() => hdlImgClk(skyBlue)}
              />
            </div>
          </div>
        </div>

        <button className={styles.crtButton} onClick={hdlCrte}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateNotePopBox;



 