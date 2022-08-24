import React, {useState} from 'react';
import module from './form.module.scss'
import {Form, Field} from 'react-final-form'
import Input from './input'

import {v4} from 'uuid';

const Forma = ({createItem}) => {
    const PreventAction = (event) => {
        createItem(event.todoTask, v4());
        event.todoTask = undefined;
    }

    const validation = (values) => {
        const errors = {};
        if (values.todoTask === undefined || values.todoTask.length < 5) {
            errors.todoTask = 'min length 5';
        }
        return errors;
    }

    return (
        <Form
            onSubmit={PreventAction}
            validate={validation}
            render={(props) => {
                return (
                    <form onSubmit={props.handleSubmit} className={module.fromWrapper}>
                        <div className={module.str}>
                            <Field name='todoTask'
                                   label={'task'}
                                   component={Input}
                            />
                        </div>
                        <button type="submit"> Add Task</button>
                    </form>)
            }}
        />)
};
export default Forma;