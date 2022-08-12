import {useState, useEffect} from "react";
import Items from '../items/items'
import Form from '../form/form'
import axios from "axios";
import module from './wrapper.module.scss';

function Wrapper() {
    const [store, setStore] = useState([]);

    const CreateItem = async (value, id, done = false, edit = false) => {
        setStore([...store, {value, id, done, edit}])
        await axios.post('https://62f600ee612c13062b4441c2.mockapi.io/todo/todos', {value, id, done, edit})
        await axios.get('https://62f600ee612c13062b4441c2.mockapi.io/todo/todos')
            .then(res => {
                setStore(res.data)
            })
    }

    const DeleteItem = (id) => {
        const res = store.filter(item => item.id !== id);
        setStore(res);
        axios.delete(`https://62f600ee612c13062b4441c2.mockapi.io/todo/todos/${id}`)
            .then(res => console.log(res))
    }

    const DoneItem = (id) => {
        const res = store.map(item => {
            if (item.id === id) {
                item.done = !item.done;
                axios.put(`https://62f600ee612c13062b4441c2.mockapi.io/todo/todos/${id}`, item)
                    .then(res => console.log(res))
            }
            return item;
        })
        setStore(res);
    }

    const EditItem = (id, value) => {
        const res = store.map(item => {
            if (item.id === id) {
                item.edit = !item.edit;
                item.value = value;
                axios.put(`https://62f600ee612c13062b4441c2.mockapi.io/todo/todos/${id}`, item)
                    .then(res => console.log(res))
            }
            return item;
        })
        setStore(res);
    }

    useEffect(() => {
        axios.get('https://62f600ee612c13062b4441c2.mockapi.io/todo/todos')
            .then(res => {
                setStore(res.data)
            })
    }, []);

    return (
        <div className={module.wrapper}>
            <Form createItem={CreateItem}/>
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
