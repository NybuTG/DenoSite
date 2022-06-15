import { useState, useEffect } from "react";
import styles from "../styles/Total.module.css"
import React from "react";

function Total(props) {

    // const updateCart = (id, isDecrease) => {
    //     let copy = new Array();
    //     for (let i=0; i < props.counted_cart.length; i++) {
    //         copy.push(props.counted_cart[i]);
    //     }

    //     let copy_unsorted = new Array();
    //     for (let i=0; i < cart.length; i++) {
    //         copy_unsorted.push(cart[i]);
    //     }

    //     const value = (isDecrease ? -1 : 1);
    //     let item = copy.find(x => x.id == id);
    //     let unsorted_cart_item = copy_unsorted.find(x => x.id == id);
        
    //     let index = copy.indexOf(item);
    //     let index_unsorted = copy_unsorted.indexOf(unsorted_cart_item);
        
    //     item.count += value;
    //     if (item.count <= 0) {
    //         copy.splice(index, 1);
            
            
    //     } else {
    //         copy[index] = item;
    //     }

    //     if (isDecrease) {
    //         copy_unsorted.splice(index_unsorted, 1);
    //     }

    //     setCounted_cart(copy);
    //     setCart(copy_unsorted);
    // }

    return (
        <div className={styles.wrapper}>
            <ul className={styles.total}>
                {props.counted_cart && props.counted_cart.map((item) => 
                    <li key={item.id} className={styles.cartItem}>
                            <ul className={styles.listItem}>
                                
                                <li>{item.id}</li>
                                <li>{item.name}</li>
                                <li>€{item.price}</li>
                                <li>{item.count}x</li>
                                <li>
                                    <a onClick={() => props.updateCart(item.id, false)}>+</a>/
                                    <a onClick={() => props.updateCart(item.id, true)}>-</a>
                                </li>
                            </ul>
                    </li>
                )}

            </ul>
            <div className={styles.calcWrapper}>
                <div className={styles.calcTotal}>
                    <h5 id={styles.subtotal}>Subtotaal:</h5>
                    <p>€ {props.total.toFixed(2).toString().replace(".", ",")}</p>
                
                    <h5 id={styles.discount}>Korting:</h5> 
                    <p>€ <input placeholder="0,00" onChange={(e) => props.updateDiscount(+e.target.value.replace(",", "."))}></input></p>
                
                    <h5 id={styles.total}>Totaal:</h5>
                    <p> € {(+props.total - +props.discount).toFixed(2).replace(".", ",")}</p>
                </div>
            {/* End of calcTotal */}
            </div>
        {/* End of totalwrapper */}
        </div>
    )
}

export default Total;