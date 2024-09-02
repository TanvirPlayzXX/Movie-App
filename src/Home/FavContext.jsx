import {createContext, useContext, useState} from 'react';


export const FavContext = createContext();

export const Favprovider = ({children})=>{
    const [deArr,setArr] = useState([]);
        return(<FavContext.Provider value={{deArr,setArr}}>
            {children}
        </FavContext.Provider>)
}

