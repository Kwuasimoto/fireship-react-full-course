/**
 * [004] Render Components Conditionally
 */

import React from 'react';
import LoadingButton from "./LoadingButton";

const Conditionals: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState(false)

    return <>
        <h1>Video 4: Conditional Rendering</h1>
        <LoadingButton
            onClick={() => setIsLoading(!isLoading)}
            loading={isLoading}
            label={"Press Me!"}
        />
    </>;
};

export default Conditionals;