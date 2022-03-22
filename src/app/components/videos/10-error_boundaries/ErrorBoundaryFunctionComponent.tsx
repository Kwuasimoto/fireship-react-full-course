/**
 * TEST
 * This requires context with state to check if an error exists.
 */
import React from 'react';
import {ErrorBoundaryFunctionComponentContext} from "./ErrorBoundaryFunctionComponentProvider";

function functionThatThrowsError() {
    throw new Error("Something blew up 🤯!")
}

const ErrorBoundaryFunctionComponent: React.FC = ({children}) => {

    const {error, setError} = React.useContext(ErrorBoundaryFunctionComponentContext)

    function handleClick() {
        try {
            functionThatThrowsError()
        } catch (e: any) {
            console.log("Setting Error", e)
            setError(e)
        }
    }

    function removeError() {
        setError(undefined)
    }

    if (error)
        return <>
        <button onClick={removeError}>Remove Error</button>
            <h3>Fallback UI</h3>
        </>

    return <>
        <button onClick={handleClick}>Throw Error</button>
        {children}
    </>;
};

export default ErrorBoundaryFunctionComponent;