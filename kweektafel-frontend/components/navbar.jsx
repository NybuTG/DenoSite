import styles from "../styles/NavBar.module.css"
import React, { useState } from 'react';
import UserModal from "./modal.jsx";

function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className={styles.root}>
                <ul className={styles.NavBar}>
                    <li><a href="/cash_register">Kassa</a></li>
                    <li><a href="/stats">Statistieken</a></li>
                    <li><a href="/inventory">Artikelbeheer</a></li>
                    <li><a href="/admin">Admin Panel</a></li>
                    <li style={{float: "right"}}><a onClick={() => setIsOpen(true)}>{props.username}</a></li>
                </ul>
            </nav>

            {isOpen && 
                <UserModal setIsOpen={setIsOpen}>
                    <div className={styles.userbox}>
                        <h4>{props.username}</h4>
                        <div className={styles.icon} />
                        <a href="">Account beheer</a>
                        <a className={styles.dramatic} href="">Uitloggen</a>
                        {/* <a onClick={() => setIsOpen(false)}>Sluiten</a> */}
                    </div>
                </UserModal>
            }

        </div>
    )
}

export default NavBar;