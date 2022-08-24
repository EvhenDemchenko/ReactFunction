import {createContext, useState} from "react";

export const ErrorContext = createContext({});

const Context = (props) => {
    const [hasError, setError] = useState(false)
    const value = {hasError, setError};

    if (hasError) {
        throw Error('ошибка из контекста !!!')
    }

    return <ErrorContext.Provider value={value}>
        {props.children}
        </ErrorContext.Provider>
}
export default Context