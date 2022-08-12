import Item from "../item/item";
import module from './items.module.scss';


const Items = ({store, deleteFn, doneFn, editF}) => {
    return (
        <div className={module.items}>
            {store.map(item => <Item
                doneFn={doneFn}
                deleteFn={deleteFn}
                item={item}
                key={item.id}
                editFn={editF}
            />)}
        </div>
    );
};

export default Items;