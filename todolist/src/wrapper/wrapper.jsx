import {useState, useEffect} from "react";
import Items from '../items/items'
import Forma from '../form/form'
import module from './wrapper.module.scss';
import localforage from "localforage";

const KEY = 'todos';

function Wrapper() {
    const [store, setStore] = useState([]);

    const CreateItem = async (value, id, done = false, edit = false) => {
        setStore(prevState => {
            localforage.setItem(KEY, [...prevState, {value, id, done, edit}]);
            return [...prevState, {value, id, done, edit}]
        })
    }

    const DeleteItem = (id) => {
        localforage.getItem(KEY)
            .then(data => {
                return data.filter(item => item.id !== id);
            }).then(res => {
            localforage.setItem(KEY, res)
            setStore(res);
        })
    }

    const DoneItem = (id) => {
        localforage.getItem(KEY)
            .then(data => {
                return data.map(item => {
                    if (item.id === id) {
                        item.done = !item.done;
                    }
                    return item;
                })
            })
            .then(res => {
                localforage.setItem(KEY, res)
                setStore(res);
            })
    }

    const EditItem = (id, value) => {
        localforage.getItem(KEY)
            .then(data => {
                return data.map(item => {
                    if (item.id === id) {
                        item.edit = !item.edit;
                        item.value = value;
                    }
                    return item;
                })
            })
            .then(res => {
                localforage.setItem(KEY, res);
                setStore(res);
            })
    }

    useEffect(() => {
        localforage.getItem(KEY)
            .then(data => {
                setStore(data)
            })
    }, []);

    return (
        <div className={module.wrapper}>
            <Forma createItem={CreateItem}/>
            <Items
                doneFn={DoneItem}
                deleteFn={DeleteItem}
                store={store}
                editF={EditItem}
            />
        </div>
    );
}

export default Wrapper;
