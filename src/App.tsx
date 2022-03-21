import React from 'react';
import Components from "./app/components/videos/3-components/Components";
import Conditionals from "./app/components/videos/4-conditional_rendering/Conditionals";
import Looping from "./app/components/videos/5-looping/Looping";
import Events from "./app/components/videos/6-events/Events";

const App:React.FC = () => {

  return <>
    <Components/>
    <Conditionals/>
    <Looping/>
    <Events/>
  </>;
}

export default App;
