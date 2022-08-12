import React, {useState} from 'react';
import module from './form.module.scss'
import {v4} from 'uuid';

const Form = ({createItem}) => {
    const [inputValue, setInputValue] = useState('');
    const InputValue = (event) => {
        setInputValue(event.target.value);
    }
    const PreventAction = (event) => {
        event.preventDefault();
        createItem(inputValue, v4());
        setInputValue('');
    }

    return (
        <form onSubmit={PreventAction} className={module.fromWrapper}>
            <input
                value={inputValue}
                onChange={InputValue}
                placeholder={'Enter something...'}
                type="text"/>
            <button type="submit"> Add Task</button>
        </form>
    );
};
export default Form;