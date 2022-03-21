import React, {BaseSyntheticEvent} from 'react';

const Input: React.FC = () => {
    const [value, setValue] = React.useState("")

    const onChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    return <>
        <input
            value={value}
            placeholder="Enter some text"
            onChange={onChange}
        />
        <h3>
            {"Input Value: " + value}
        </h3>
    </>;
};

export default Input;