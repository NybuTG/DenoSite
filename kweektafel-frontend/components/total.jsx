function Total(props) {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [counted_cart, setCounted_cart] = useState([]);
    const [discount, setDiscount] = useState(0);

    // Update when counted_cart  changes
    useEffect(() => {
        let total = 0;
        counted_cart.map((item) => {
            let price = +item.price * +item.count
            total += price
        })
        setTotal(total);
        props.onChange(counted_cart, total);
    }, [counted_cart])

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
    )
}

export default Total;