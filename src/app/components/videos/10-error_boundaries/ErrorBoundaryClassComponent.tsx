import React from 'react';

export default class ErrorBoundaryClassComponent extends React.Component<{hasError: boolean}, {hasError: boolean}> {
    constructor(props: {hasError: boolean}) {
        super(props);

        console.log(props)
        this.state = {hasError: props.hasError};
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error)
        return { hasError: !!error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log('Something blew up 🤯!', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h3>Fallback UI</h3>
                </div>
            );
        }
        return this.props.children;
    }
}