import NavBar from "../components/navbar.jsx"
import Total from "../components/total.jsx"
import styles from "../styles/CashRegister.module.css"
import React from "react";
import ItemList from "../components/itemlist.jsx";

const ROOT = "http://kweektafel.nybu-nerd.xyz"



class CashRegister extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [],
            itemCopy: [],
            cart: [],
            subtotal: 0,
            counted_cart: [],
            discount: 0,
            search: "",
        }
    }

    getItems = async () => {
        fetch(
            "http://kweektafel.nybu-nerd.xyz/items"
        ).then((res) => res.json()).then(res => {
            this.setState({
                items: res,
                itemCopy: res,
            });
        });

    };

    handleAddCart = (item_props) => {

        // React state is not synchronous
        // Copy has to be made to update `counted_cart`. State is not yet set  if the traditional cart would be given
        let copy = new Array();
        for (let i=0; i < this.state.cart.length; i++) {
            copy.push(this.state.cart[i])
        }
        copy.push(item_props)
        this.setState({
            cart: copy
        })
        this.handleCart(copy);
    };

    // Fetch when page loads
    componentDidMount() {
        this.getItems();
    }

    componentDidUpdate(_, prevState) {
        if (prevState.counted_cart !== this.state.counted_cart || prevState.discount !== this.state.discount) {
            let total = 0;
            this.state.counted_cart.map((item) => {
                let price = +item.price * +item.count
                total += price
            })
            
            this.setState({
                subtotal: total,
                total: total - this.state.discount
            });
        }

        if (prevState.search !== this.state.search) {
            let filtered = new Array();
            console.log(this.state.search)
            if (this.state.itemCopy) {
                this.state.itemCopy.map((item) => {
                    if (item.name.toUpperCase().includes(this.state.search.toUpperCase())) {
                        filtered.push(item);
                    }
                })
                
                this.setState({
                    items: filtered,
                });
            }
        }
    }

    updateCart = (id, isDecrease) => {
        let copy = new Array();
        for (let i=0; i < this.state.counted_cart.length; i++) {
            copy.push(this.state.counted_cart[i]);
        }

        let copy_unsorted = new Array();
        for (let i=0; i < this.state.cart.length; i++) {
            copy_unsorted.push(this.state.cart[i]);
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

        this.setState({
            counted_cart: copy,
            cart: copy_unsorted,
        })
    }


    handleCart = (cart) => {
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

        this.setState({
            counted_cart: cart_new
        })
    }

    updateDiscount = (newDiscount) => {
        this.setState({
            discount: newDiscount,
        })
    }

    updateSearch = (search) => {
        this.setState({
            search: search,
        })
    }

    handleSave = () => {
        // e.preventDefault();
        
        (async () => {
            await fetch("http://kweektafel.nybu-nerd.xyz/push_sale", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    products: this.state.counted_cart,
                    price: this.state.subtotal - this.state.discount,
                    discount: this.state.discount,
                }),
                redirect: "follow"
            }).then((res) => {
		console.log(res);
                if (res.status == 303) {
		    console.log("redirecting...");
                    window.location.href = "/cash_register"; 
                }
            })
        })();
    }
    
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.interface}>
                        <Total 
                            counted_cart={this.state.counted_cart} cart={this.state.cart} items={this.state.items} total={this.state.subtotal}
                            discount={this.state.discount} className={styles.total}
                            updateCart={this.updateCart} updateDiscount={this.updateDiscount}
                        />
                        <ItemList
                            items={this.state.items}
                            updateSearch={this.updateSearch}
                            handleAddCart={this.handleAddCart}
                            className={styles.options}
                        />
                        <div className={styles.actions}>
                            <a onClick={this.handleSave} className={styles.saveButton}>Verkoop Opslaan</a>
                            <a onClick={() => {window.location.replace("/cash_register")}}  className={[styles.deleteButton, styles.dramatic]}>Verkoop Verwijderen</a>
                        </div>
                    </div>
                </div>
                <NavBar pageName="Artikelbeheer" username="Admin" />
            </div>
        );
    }
}

export default CashRegister;
