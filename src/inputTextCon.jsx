import React from 'react'
import InputText from "./inputText"

function inputTextCon({createGrps,selectGrpIndex}) {
    if(selectGrpIndex !== null){
        const group = createGrps[selectGrpIndex];
        const {GrpName,selectColor,selectImage} = group;
    
  return (
    <InputText
    GrpName ={GrpName}
    selectColor ={selectColor}
    selectImage = {selectImage}
    />
  );

}
return null;
}

export default inputTextCon;