import React from 'react';
import module from './form.module.scss'
import {Form, Field} from 'react-final-form'
import Input from './input'
import arrayMutators from 'final-form-arrays'
import {FieldArray} from 'react-final-form-arrays'
import {v4} from "uuid";

import {useContext} from "react";
import {ValContext} from '../context/context';

const Forma = ({createItem}) => {
    const {initialValues} = useContext(ValContext)

    const onSubmitForm = (values, form) => {
        const {items} = values
        items.forEach((item) => {
            createItem(item, v4())
        })
        Object.keys(values).forEach(key => {
            console.log(key)
            form.change(key, new Array(items.length).fill(''));
            form.resetFieldState(key);
        })
    }

    const validation = (values) => values === undefined || (values.length < 5 && values !== "") || values === "" ? 'Required' : undefined;

    return (
        <Form
            onSubmit={onSubmitForm}
            mutators={{...arrayMutators}}
            initialValues={{items: initialValues}}
            render={(props) => {
                const {handleSubmit, form} = props
                return (
                    <form
                        onSubmit={(values) => {
                            handleSubmit(values, form)
                        }}
                        className={module.fromWrapper}>
                        <FieldArray name={'items'}>
                            {({fields}) => (
                                <div>
                                    {fields.map((name, index) => (
                                        <div key={index}
                                             className={module.str}>
                                            <Field name={name} validate={validation} component={Input}/>
                                            {fields.length > 1 &&
                                                <button onClick={() => {
                                                    fields.remove(index)
                                                }}> delete</button>}
                                        </div>
                                    ))}
                                    <button type="button" className={module.btn} onClick={() => {
                                        fields.push(undefined);
                                    }}>add field
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                        <button type="submit"> submit</button>
                    </form>)
            }}
        />)
}


export default Forma