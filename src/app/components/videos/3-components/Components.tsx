import React from 'react';
import Card from "./Card";
import Icon from "./Icon";

const Components: React.FC = () => {
    return <>
        <h1>Video 3: Components</h1>
        <Card icon={<Icon/>}>
            Body of the card
        </Card>
    </>;
};

export default Components;