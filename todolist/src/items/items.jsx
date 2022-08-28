import {useContext} from "react";
import Item from "../item/item";
import module from './items.module.scss';
import {ErrorContext} from "../context/context";
import {v4} from 'uuid';

const Items = ({store, deleteFn, doneFn, editF }) => {
    const {setError} = useContext(ErrorContext)

    const getError = () => {
        setError(true)
    }
    return (
        <>
            <button className={module.Error} onClick={()=>{getError()}}>  вызвать ошибку с использованием useContext</button>
            <div className={module.items}>
                {store.map(item => <Item
                    doneFn={doneFn}
                    deleteFn={deleteFn}
                    item={item}
                    key={v4()}
                    editFn={editF}
                />)}
            </div>
        </>

    );
};

export default Items;