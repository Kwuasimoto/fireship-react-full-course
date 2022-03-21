import React from 'react';
import Components from "./app/components/videos/3-components/Components";
import Conditionals from "./app/components/videos/4-conditional_rendering/Conditionals";
import Looping from "./app/components/videos/5-looping/Looping";

const App:React.FC = () => {

  return <>
    <Components/>
    <Conditionals/>
    <Looping/>
  </>;
}

export default App;
