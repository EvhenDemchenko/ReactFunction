import React from 'react';
import module from './item.module.scss';
import '../style.css'
import {Form, Field} from 'react-final-form'
import Input from '../form/input'

const Item = ({item, deleteFn, doneFn, editFn}) => {
    const DeleteCurrentItem = () => {
        deleteFn(item.id);
    }
    const DoneItem = () => {
        doneFn(item.id);
    }
    const EditCurrentItem = (value) => {
        editFn(item.id, value.task);
    }

    const validation = (values) => {
        const errors = {};
        if (values.task === undefined || values.task.length <= 5) {
            errors.task = 'min length 5';
        }
        return errors;
    }

    return (
        <div className={module.item}>
            <Form
                onSubmit={EditCurrentItem}
                validate={validation}
                initialValues={{
                    task: item.value,
                    done: item.done
                }}
                render={(props) => {
                    return (
                        <form className={module.label} onSubmit={props.handleSubmit}>
                            <label className={module.innerLabel}>
                                <Field name="checkbox"
                                       label='checkbox'
                                       component="input"
                                       type='checkbox'
                                       onClick={DoneItem}
                                       checked={props.initialValues.done}
                                />
                                {item.edit
                                    ? <Field className={module.input} name="task" label='task' component={Input}/>
                                    : <b>{props.initialValues.task}</b>
                                }
                            </label>
                            <button> edit</button>
                        </form>
                    )
                }}
            />
            <div className={module.buttonContainer}>
                <button onClick={DeleteCurrentItem}> delete</button>
            </div>
        </div>
    );
};

export default Item;