import React from 'react';

const Input = (props) => {
    const {input, meta, ...rest} = props;
    return (
        <>
            <input onChange={input.onChange} value={input.value} {...rest} type="text"/>
            {input.value.length <= 5 && input.value.length >= 1 ? <span> невалидное поле  </span> : ''}
        </>
    );
};

export default Input;