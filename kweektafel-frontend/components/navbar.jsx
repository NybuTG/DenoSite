import styles from "../styles/NavBar.module.css"
import React, { useState } from 'react';
import UserModal from "./modal.jsx";
import Link from "next/link";

function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className={styles.root}>
                <ul className={styles.NavBar}>

                    <li><Link href="/cash_register">Kassa</Link></li>
                    <li><Link href="/stats">Statistieken</Link></li>
                    <li><Link href="/sales">Verkopen</Link></li>
                    {/* <li><Link href="/admin">Admin p</Link></li> */}
                    <li style={{float: "right"}}><a onClick={() => setIsOpen(true)}>{props.username}</a></li>
                </ul>
            </nav>

            {isOpen && 
                <UserModal setIsOpen={setIsOpen}>
                    <div className={styles.userbox}>
                        <h4>{props.username}</h4>
                        <div className={styles.icon} />
                        <a className={styles.dramatic} href="/uitloggen">Uitloggen</a>
                        {/* <a onClick={() => setIsOpen(false)}>Sluiten</a> */}
                    </div>
                </UserModal>
            }

        </div>
    )
}

export default NavBar;