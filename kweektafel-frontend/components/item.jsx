import styles from "../styles/Item.module.css"

function Item(props) {
    const eur = "€";
    return (
        <button onClick={() => props.onClick({"name": props.name, "id": props.i_id, "price": props.price})} className={styles.item}>
            <h6>{props.name}</h6>
            <p>Id: {props.i_id}</p>
            <p>{[eur, (+props.price).toFixed(2).replace(".", ",")]}</p>
        </button>
    )
}

export default Item;