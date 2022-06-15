import React from "react";
import NavBar from "../components/navbar";

import styles from "../styles/Stats.module.css"

import YearGraph from "../components/YearGraph";
import DayGraph from "../components/DayGraph";
import MonthGraph from "../components/MonthGraph";



class Stats extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            show: 1,
        }

        this.options = ["Dag", "Maand", "Jaar"];
        this.graphs = [<DayGraph key={0} />, <MonthGraph key={1} />, <YearGraph key={2} />]
    }

    componentDidUpdate(_, prev) {
        if (this.state.show !== prev.show) {
            console.log(this.state.show)
        }
    }

    render () {

        return (
            <div className={styles.parent}>
                <NavBar/>
                <div className={styles.wrapper}>
                    <ul className={styles.selector}>
                        {this.options.map((option, i) =>
                            <li className={i == this.state.show ? styles.active : ''} key={i} onClick={() => this.setState({show: i})}><a>{option}</a></li>
                        )}
                    </ul>
                    {this.graphs[this.state.show]}
                </div>
            </div>
            );
        }
}

export default Stats;