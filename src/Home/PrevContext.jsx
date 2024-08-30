import {createContext, useContext} from 'react';

const moviePrev = {
    image: 'https://iili.io/dwf5Gkl.png',
    title: "Insider",
    details: "2022 | Comedy horror | 1 Season",
    loved: true,
    link: "/movies/insider"
}


export const Movcontext = createContext();

export const Movprovider = ({children})=>{
        return(<Movcontext.Provider value={moviePrev}>
            {children}
        </Movcontext.Provider>)
}

