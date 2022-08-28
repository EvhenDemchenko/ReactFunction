import React from 'react';

const Input = (props) => {
    const {input, meta, ...rest} = props;
    return (
        <>
            <input onChange={input.onChange} value={input.value} {...rest} type="text"/>
            {meta.error && meta.touched && <span> невалидное поле  </span>}
        </>
    );
};

export default Input;