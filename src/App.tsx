import React from 'react';
import Components from "./app/components/videos/3-components";
import Conditionals from "./app/components/videos/4-conditional_rendering";
import Looping from "./app/components/videos/5-looping";
import Events from "./app/components/videos/6-events";
import State from "./app/components/videos/7-state";
import LifeCycles from "./app/components/videos/8-lifecycles";
import DeepComponentProvider from "./app/components/videos/9-context/DeepComponentProvider";
import ContextAPI from "./app/components/videos/9-context";
import ErrorBoundaries from "./app/components/videos/10-error_boundaries";
import ErrorBoundaryFunctionComponentProvider
    from "./app/components/videos/10-error_boundaries/ErrorBoundaryFunctionComponentProvider";
import Animation from "./app/components/videos/12-animation";
import ReactRouter from "./app/components/videos/13-react_router";

const App: React.FC = () => {

    return <>
        {/*-o-*/}
        <Components/>
        {/*-o-*/}
        <Conditionals/>
        {/*-o-*/}
        <Looping/>
        {/*-o-*/}
        <Events/>
        {/*-o-*/}
        <State/>
        {/*-o-*/}
        <LifeCycles/>
        {/*-o-*/}
        <DeepComponentProvider>
            <ContextAPI/>
        </DeepComponentProvider>
        {/*-o-*/}
        <ErrorBoundaryFunctionComponentProvider>
            <ErrorBoundaries/>
        </ErrorBoundaryFunctionComponentProvider>
        {/*-o-*/}
        <Animation/>
        {/*-o-*/}
        <ReactRouter/>
    </>;
}

export default App;
