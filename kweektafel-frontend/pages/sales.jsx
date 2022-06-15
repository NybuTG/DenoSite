import React from 'react';
import NavBar from '../components/navbar';
import styles from "../styles/Sales.module.css";
import Collapsible from "react-collapsible"

class Sales extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sales: []
        }
    }

    getSales = async () => {
        await fetch("http://localhost:8080/items/sales").then(res => res.json()).then(res => this.setState({sales: res}))
    }

    componentDidMount() {
        this.getSales();
    }


    render() {
        return (
            <div className={styles.container}>
                <NavBar className={styles.navbar} />
                <div className={styles.wrapper}>
                    <ul>
                    <li className={styles.salesItem}>
                        <ul className={styles.fixed}>
                            <li className={styles.title}>ID</li>
                            <li className={styles.title}>Producten</li>
                            <li className={styles.title}>Prijs</li>
                            <li className={styles.title}>Korting</li>
                            <li className={styles.title}>Datum</li>
                        </ul>
                    </li>
                    {this.state.sales && this.state.sales.map((sale, i) =>
                        <li  key={i} className={styles.salesItem}>
                            <ul>
                                <li>{sale.id}</li>
                                <li> 
                                    <Collapsible easing={'cubic-bezier(0.83, 0, 0.17, 1)'} transitionTime={350} trigger="Klik om aankoop te bekijken" triggerWhenOpen="Klik om te sluiten">
                                    <ul className={styles.title}>
                                       <li className={styles.segment}>ID</li>
                                       <li className={styles.segment}>Naam</li>
                                       <li className={styles.segment}>Prijs</li>
                                       <li className={styles.segment}>Aantal</li> 
                                    </ul>
                                    {sale.products && sale.products.map((item, j) => 
                                    <ul key={j}>
                                        <li className={styles.segment}>{item.id}</li>
                                        <li className={styles.segment}>{item.name}</li>
                                        <li className={styles.segment}>€{item.price}</li>
                                        <li className={styles.segment}>{item.count}</li>
                                    </ul>
                                    
                                )}</Collapsible>
                                </li>
                                <li>€{String(sale.price).replace(".", ",")}</li>
                                <li>€{String(sale.discount).replace(".", ",")}</li>
                                <li>{sale.date}</li>
                            </ul>
                        </li>
                    )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sales