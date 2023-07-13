import React, { createContext, useState } from "react";

export const GrpContext = createContext();

export const GrpProvider = ({ children }) => {
    const [createGrps, setCreateGrps] = useState([]);
    const [selectGrpIndex, setSelectGrpIndex] = useState(null)

    return (
        <GrpContext.Provider value={{ createGrps, selectGrpIndex,setCreateGrps, setSelectGrpIndex }}>
            {children}
        </GrpContext.Provider>
    );

};



export default GrpContext;