import React from 'react';

type ErrorBoundaryFunctionComponentProviderProps = {
    error?: Error
    setError: React.Dispatch<React.SetStateAction<Error | undefined>>
}

export const ErrorBoundaryFunctionComponentContext = React.createContext<ErrorBoundaryFunctionComponentProviderProps>({
    error: undefined,
    setError: prev => prev
})

const ErrorBoundaryFunctionComponentProvider: React.FC = ({children}) => {

    /**
     * Provide an empty error object to avoid undefined type union
     */
    const [error, setError] = React.useState<Error>()

    return <ErrorBoundaryFunctionComponentContext.Provider value={{
        error,
        setError
    }}>
        {children}
    </ErrorBoundaryFunctionComponentContext.Provider>;
};

export default ErrorBoundaryFunctionComponentProvider;