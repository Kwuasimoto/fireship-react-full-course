import React from 'react';

const Card: React.FC<{icon: JSX.Element}> = ({icon, children}) => {
    return <section>
        <h2>{icon} Title</h2>
        {children}
    </section>;
};

export default Card;