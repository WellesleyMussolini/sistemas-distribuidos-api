import React, { useState, createContext, useContext } from "react";

const Context = createContext();

export const UseContextProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    return (
        <Context.Provider value={{
            search,
            setSearch,
        }}>
            {children}
        </Context.Provider>
    )
};

export const UseSearchContext = () => {
    let context = useContext(Context);
    let { search, setSearch } = context;
    return { search, setSearch };
}