import React, {useState, memo} from 'react';
import module from './form.module.scss'
import {Form, Field} from 'react-final-form'
import Input from './input'
import arrayMutators from 'final-form-arrays'
import {FieldArray} from 'react-final-form-arrays'
import {v4} from 'uuid';
const values = ['' , '']
const Forma = ({createItem}) => {
    const PreventAction = (event) => {
        const {items} = event;
        items.forEach( (item) => {
              createItem(item)
        })
    }
    const validation = (values) => {
        const errors = {};
        const {items} = values;
        items.forEach(item => {
            if (item === undefined || item.length < 5) {
                errors.todoTask = 'min length 5';
            }
        })
        return errors;
    }
    console.log('component')
    return (
        <Form
            onSubmit={PreventAction}
            validate={validation}
            mutators={{...arrayMutators}}
            initialValues={{items:values }}
            render={(props) => {
                console.log('rendered')
                return (
                    <form
                        onSubmit={props.handleSubmit}
                        className={module.fromWrapper}>
                        <FieldArray name={'items'}>
                            {({fields}) => (
                                <div>
                                    {fields.map((name, index) => (
                                        <div key={index}
                                             className={module.str}>
                                            <Field name={name} component={Input}/>
                                        </div>
                                    ))}
                                    <button className={module.btn} onClick={()=>{fields.push('')}}>add field</button>
                                </div>
                            )}
                        </FieldArray>
                        <button type={'submit'}> submit</button>
                    </form>)
            }}
        />)
};
export default memo(Forma)

// <FieldArray name={"api"}>
//     {({fields}) => (
//         <div>
//             {fields.map((name, index) => (
//                 <div key={index}>
//                     <Field name={name} component={Input}/>
//                 </div>))}
//             <button onClick={() => {fields.push(newTodoItem)}}> Add new field</button>
//         </div>)}
// </FieldArray>
// export default Forma;