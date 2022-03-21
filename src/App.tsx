import React from 'react';
import Components from "./app/components/videos/3-components";
import Conditionals from "./app/components/videos/4-conditional_rendering";
import Looping from "./app/components/videos/5-looping";
import Events from "./app/components/videos/6-events";
import State from "./app/components/videos/7-state";

const App:React.FC = () => {

  return <>
    <Components/>
    <Conditionals/>
    <Looping/>
    <Events/>
    <State/>
  </>;
}

export default App;
