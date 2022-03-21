import React from 'react';
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";

function App() {
  return <div>
    <Card icon={<Icon/>}>
      Body of the card
    </Card>
  </div>;
}

export default App;
