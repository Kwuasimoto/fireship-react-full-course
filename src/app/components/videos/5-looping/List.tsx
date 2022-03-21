import React from 'react';

const List: React.FC<{listData: Array<{id: number, name: string}>}> = ({listData}) => {
    return (
        <>
            <ul>
                {listData &&
                    listData.map(({id, name}) => {
                        return <li key={id}>{name}</li>
                    })}
            </ul>
        </>
    );
};

export default List;