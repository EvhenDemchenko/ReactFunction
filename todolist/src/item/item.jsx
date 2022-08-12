import React, {useState} from 'react';
import module from './item.module.scss';

const Item = ({item, deleteFn, doneFn, editFn}) => {

    const DeleteCurrentItem = () => {
        deleteFn(item.id);
    }
    const DoneItem = () => {
        doneFn(item.id);
    }
    const EditCurrentItem = () => {
        editFn(item.id, value);
    }
    const GetValue = (event) => {
        setValue(event.target.value);
    }
    const [value, setValue] = useState(item.value);

    return (
        <div className={module.item}>
            <label className={module.label}>
                <input onClick={DoneItem} defaultChecked={item.done} type="checkbox"/>
                {item.edit
                    ? <input value={value} className={module.input} onChange={GetValue} type="text"/>
                    : <b>{value}</b>}
            </label>
            <div className={module.buttonContainer}>
                <button onClick={EditCurrentItem}> edit</button>
                <button onClick={DeleteCurrentItem}> delete</button>
            </div>
        </div>
    );
};

export default Item;