import NavBar from "../components/navbar.jsx"
import styles from '../styles/Admin.module.css'
import React, {useState} from "react";
import UserModal from "../components/modal.jsx"

function Admin() {
    return (
        <div>
            <NavBar username="Admin" />
        </div>
    )
}

export default Admin;