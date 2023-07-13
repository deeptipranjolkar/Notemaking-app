import React, { useContext, useEffect} from "react";
import { GrpContext } from "./GrpContext";
import { useState } from "react";
import CreateNotePopBox from "./CreateNotePopBox";
import styles from "./AppNotes.module.css";

function AppNotes({ handleGroupClick }) {
  const { createGrps, selectGrpIndex } = useContext(GrpContext);
  const { setCreateGrps, setSelectGrpIndex } = useContext(GrpContext);
  const [shModal, setShModal] = useState(false);
  const [groupName, setGrpName] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [selectImage, setSelectImage] = useState("");


  useEffect(() => {
    const localStore = localStorage.getItem("createGrps");
    if (localStore) {
      setCreateGrps(JSON.parse(localStore));
    }

  }, [setCreateGrps]);

  const hdlCrte = (grpName, selectColor, selectImage) => {
    const nGrp = {
      groupName,
      selectColor,
      selectImage,
    };
    setCreateGrps([...createGrps, nGrp]);
    setShModal(false);
    setGrpName("");
    setSelectColor("");
    setSelectImage("");

  };

  useEffect(() => {
    localStorage.setItem("creategrps", JSON.stringify(createGrps));

  }, [createGrps]);

  const handleGrpNameClk = (index) => {
    setSelectGrpIndex(index);
    handleGroupClick();
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className={styles.left}>
      <h1>Pocket notes</h1>
      {!isMobile && (
        <button onClick={() => setShModal(true)}>
          <p className={styles.createNotes}>+ Create Notes group</p>
        </button>
      )}
      {shModal && (
        <CreateNotePopBox
          groupName={groupName}
          selectColor={selectColor}
          selectImage={selectImage}
          onSubmit={hdlCrte}
          setGrpName={setGrpName}
          setSelectColor={setSelectColor}
          setSelectImage={setSelectImage}
        />
      )}

      {createGrps.map((group, index) => (
        <div className={styles.grp_container} key={index}>
          <div className={`${styles["grp-circle"]}`}>
            <span>{group.groupName.slice(0, 2).toUpperCase()}</span>
            {group.selectImage && (
              <div className={styles["pink-con"]}>
                <img
                  src={group.selectImage}
                  alt="Selected"
                  className={`${styles.selectImage} ${selectGrpIndex === index
                    ? styles["pink-picture"]
                    : ""
                    }`}
                  onClick={() => handleGrpNameClk(index)}
                />
              </div>
            )}
          </div>
          {!isMobile && (
            <span
              className={`${styles.grp_name}} ${selectGrpIndex === index ? styles["pink-color"] : ""
                }`}
              onClick = {() => handleGrpNameClk(index)}
            >
              {group.groupName}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default AppNotes;