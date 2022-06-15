import React from "react";
import Item from "./item.jsx";
import styles from "../styles/ItemList.module.css";

class ItemList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.searchbar}>
                    <input type="text" placeholder="Zoek door planten" onChange={(e) => this.props.updateSearch(e.target.value)}/>
                </div>
                <div style={{filter: "drop-shadow(0 0 0)"}} className={styles.options}>
                    {this.props.items &&
                        this.props.items.map((item) => (
                            <Item name={item.name} key={item.id} i_id={item.id} price={item.price} onClick={this.props.handleAddCart}/>
                    ))}
                </div>

            </div>
        )
    }
}

export default ItemList;