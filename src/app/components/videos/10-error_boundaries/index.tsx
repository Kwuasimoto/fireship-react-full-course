import React from 'react';
import ErrorBoundaryClassComponent from "./ErrorBoundaryClassComponent";
import ErrorBoundaryFunctionComponent from "./ErrorBoundaryFunctionComponent";

const ErrorBoundaries: React.FC = () => {
    return <>
        <div>
            <h1>Video 10: Error Boundary W/ Class Component</h1>
            <div>
                <h3>Outside of error boundary</h3>
                {/*Change hasError and refresh page to see fall back ui*/}
                <ErrorBoundaryClassComponent hasError={true}>
                    <h3>Inside of error boundary</h3>
                </ErrorBoundaryClassComponent>
            </div>
        </div>
        <div>
            <h1>Custom: Error Boundary W/ Functional Component & Context API</h1>
            <div>
                <h3>Outside of error boundary</h3>
                {/*Change hasError and refresh page to see fall back ui*/}
                <ErrorBoundaryFunctionComponent>
                    <h3>Inside of error boundary</h3>
                </ErrorBoundaryFunctionComponent>
            </div>
        </div>
    </>;
};

export default ErrorBoundaries;