import { createContext, useContext } from "react";
const AppContext = createContext();
const AppProvider=({children}) => { 
    return <AppContext.Provider value={{myName:"Trapti"}}>
        {children}
    </AppContext.Provider>
};
const useProductContext=() =>{
     return useContext(AppContext);
};

export { AppProvider ,AppContext};