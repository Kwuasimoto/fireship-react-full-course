import React from 'react';
import List from "./List";

const Looping: React.FC = () => {

    return <>
        <h1>Video 5: Looping</h1>
        <List listData={[
            { id: 1, name: 'Fido 🐕' },
            { id: 2, name: 'Snowball 🐈' },
            { id: 3, name: 'Murph 🐈‍' },
            { id: 4, name: 'Zelda 🐈' }
        ]} />
    </>;
};

export default Looping;