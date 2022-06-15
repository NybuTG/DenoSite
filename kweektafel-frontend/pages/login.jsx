import styles from "../styles/Login.module.css"
import routes from "../routes.json"
import React, { useState } from "react"

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }

    postLogin = (e) => {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        
        (async () => {
            await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, password: password})
            }
        ).then(window.location.replace("http://localhost:8080/cash_register"));
    })();
        
    }

    render() {

        return (
            <div className={styles.loginPage}>
                    <form onSubmit={this.postLogin}>
                        <div className={styles.loginModal}>
                            <h3 className={styles.Item} style={{marginBottom: "10vh"}}>De Kweektafel</h3>
                            <div className={styles.Item}>
                                <label >Gebruikersnaam</label><br />
                                <input onChange={(e) => {this.setState({username: e.target.value})}} className={styles.InputBox} type="text" name="username" id="username" />
                            </div>
                            <div className={styles.Item}>
                                <label >Wachtwoord</label><br />
                                <input onChange={(e) => {this.setState({password: e.target.value})}} className={styles.InputBox} type="password" name="password" id="username" />
                            </div>
                            <div className={styles.submitButton}>
                                <input type="submit" value="Inloggen"/>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}

export default Login;