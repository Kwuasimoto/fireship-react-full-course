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

const App:React.FC = () => {

  return <>
    <Components/>
    <Conditionals/>
    <Looping/>
    <Events/>
    <State/>
    <LifeCycles/>
    <DeepComponentProvider>
      <ContextAPI/>
    </DeepComponentProvider>
    <ErrorBoundaryFunctionComponentProvider>
      <ErrorBoundaries/>
    </ErrorBoundaryFunctionComponentProvider>
  </>;
}

export default App;
