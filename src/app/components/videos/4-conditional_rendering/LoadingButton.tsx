import React from 'react';

const LoadingButton: React.FC<{
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    loading: boolean
    label: string

}> = ({onClick, loading, label}) => {

    return <button
        onClick={onClick}
        type={"button"}
    >
        {loading ? <div className="loader"/> : label}
    </button>;
};

export default LoadingButton;