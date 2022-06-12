import NavBar from "../components/navbar.jsx"
import Item from "../components/item.jsx"

import styles from "../styles/CashRegister.module.css"
import { useState, useEffect } from "react";


function CashRegister() {
    const [items, setItems] = useState()
    const [itemCopy, setItemCopy] = useState();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [counted_cart, setCounted_cart] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [search, setSearch] = useState("");

    // Actual fetch
    const getItems = async () => {
        const res = await fetch(
            "http://192.168.2.12:8080/items"
        ).then((res) => res.json());
        setItems(res);
        setItemCopy(res);
    };

    const handleAddCart = (item_props) => {

        // React state is not synchronous
        // Copy has to be made to update `counted_cart`. State is not yet set  if the traditional cart would be given
        let copy = new Array();
        for (let i=0; i < cart.length; i++) {
            copy.push(cart[i])
        }
        copy.push(item_props)
        setCart(copy);
        
        handleCart(copy);
    };

    // Fetch when page loads
    useEffect(() => {
        getItems();
    }, []);
    
    // Update when counted_cart  changes
    useEffect(() => {
        let total = 0;
        counted_cart.map((item) => {
            let price = +item.price * +item.count
            total += price
        })
        setTotal(total);
    }, [counted_cart])
    
    useEffect(() => {
        let filtered = new Array();
        if (itemCopy) {
            itemCopy.map((item) => {
                if (item.name.toUpperCase().includes(search.toUpperCase())) {
                    filtered.push(item);
                }
            })
            setItems(filtered);
        }
    }, [search])

    const updateCart = (id, isDecrease) => {
        let copy = new Array();
        for (let i=0; i < counted_cart.length; i++) {
            copy.push(counted_cart[i]);
        }

        let copy_unsorted = new Array();
        for (let i=0; i < cart.length; i++) {
            copy_unsorted.push(cart[i]);
        }

        const value = (isDecrease ? -1 : 1);
        let item = copy.find(x => x.id == id);
        let unsorted_cart_item = copy_unsorted.find(x => x.id == id);
        
        let index = copy.indexOf(item);
        let index_unsorted = copy_unsorted.indexOf(unsorted_cart_item);
        
        item.count += value;
        if (item.count <= 0) {
            copy.splice(index, 1);
            
            
        } else {
            copy[index] = item;
        }

        if (isDecrease) {
            copy_unsorted.splice(index_unsorted, 1);
        }

        setCounted_cart(copy);
        setCart(copy_unsorted);
    }

    const handleCart = (cart) => {
        let ids = new Array();
        // Add all IDs to a list
        for (let i=0; i < cart.length; i++) {
            ids.push(cart[i].id)
        }
        let counts = {} 
        ids.map((id) => {
            counts[id] = (counts[id] || 0) + 1;
        })
        let cart_new = new Array();
        cart.map((item) => {;
            if (cart_new.find(x => x.id == item.id) == undefined) {
                cart_new.push({
                    "id": item.id,
                    "name": item.name,
                    "price": item.price,
                    "count": counts[item.id],
                });
            }
        })

        setCounted_cart(cart_new);
    }

    return (
        <div className={styles.wrapper}>
            
            <div className={styles.container}>
                <div className={styles.interface}>
                    <div className={styles.totalWrapper}>
                        <ul className={styles.total}>
                            {counted_cart && counted_cart.map((item) => 
                                <li key={item.id} className={styles.cartItem}>
                                        <ul className={styles.listItem}>
                                            
                                            <li>{item.id}</li>
                                            <li>{item.name}</li>
                                            <li>€{item.price}</li>
                                            <li>{item.count}x</li>
                                            <li>
                                                <a onClick={() => updateCart(item.id, false)}>+</a>/
                                                <a onClick={() => updateCart(item.id, true)}>-</a>
                                            </li>
                                        </ul>
                                </li>
                            )}
            
                        </ul>
                        <div className={styles.calcWrapper}>
                            <div className={styles.calcTotal}>
                                <h5 id={styles.subtotal}>Subtotaal:</h5>
                                <p>€ {total.toFixed(2).toString().replace(".", ",")}</p>
                            
                                <h5 id={styles.discount}>Korting:</h5> 
                                <p>€ <input placeholder="0,00" onChange={(e) => setDiscount(e.target.value.replace(",", "."))}></input></p>
                            
                                <h5 id={styles.total}>Totaal:</h5>
                                <p> € {(+total - +discount).toFixed(2).replace(".", ",")}</p>
                            </div>
                         {/* End of calcTotal */}
                        </div>
                    {/* End of totalwrapper */}
                    </div>
                    <div className={styles.searchbar}><input type="text" placeholder="Zoek door planten" onChange={(e) => setSearch(e.target.value)}/></div>
                        <div style={{filter: "drop-shadow(0 0 0)"}} className={styles.options}>
                            
                            {items &&
                                items.map((item) => (
                                    <Item name={item.name} key={item.id} i_id={item.id} price={item.price} onClick={handleAddCart}/>
                            ))}
                        </div>
                    <div className={styles.actions}>
                        <p className={styles.saveButton}>Verkoop Opslaan</p>
                        <a className={styles.deleteButton}>Verkoop Verwijderen</a>
                    </div>
                </div>
            </div>
            <NavBar pageName="Artikelbeheer" username="Admin" />
        </div>
    );
}

export default CashRegister;