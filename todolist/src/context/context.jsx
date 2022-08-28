import {createContext, useState} from "react";

export const ErrorContext = createContext({});
export const ValContext = createContext({});

const Context = (props) => {
    const [initialValues, setInitialValues] = useState([undefined])
    const [hasError, setError] = useState(false)

    const value = {hasError, setError};
    const initVals = {initialValues, setInitialValues};

    if (hasError) {
        throw Error('ошибка из контекста !!!')
    }

    return (
        <ErrorContext.Provider value={value}>
            <ValContext.Provider value={initVals}>
                {props.children}
            </ValContext.Provider>
        </ErrorContext.Provider>)
}
export default Context