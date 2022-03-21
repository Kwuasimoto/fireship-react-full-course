import React from "react";

type DeepComponentProviderProps = {
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const DeepComponentContext = React.createContext<DeepComponentProviderProps>({
    count: 0,
    setCount: prev => prev
})

const DeepComponentProvider: React.FC = ({children}) => {
    const [count, setCount] = React.useState<number>(0)


    return <DeepComponentContext.Provider value={{count, setCount}}>
        {children}
    </DeepComponentContext.Provider>;
};

export default DeepComponentProvider;