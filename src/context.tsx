import React, { type ReactNode } from 'react'
import { createContext, useContext } from 'react'


interface ShopContextType {
    backendUrl : string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextType | undefined>(undefined)

interface ShopContextProviderProps {
    children:ReactNode
}

const ShopContextProvider:React.FC <ShopContextProviderProps> = (props) => {
  
    const backendUrl = "https://mymentorbackend.onrender.com"
    
    const Value : ShopContextType = {
        backendUrl
    }
    return (
        <ShopContext.Provider value={Value}>
            {props.children}

        </ShopContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = ()=> {
    return useContext(ShopContext)
}

export default ShopContextProvider