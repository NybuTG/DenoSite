import styles from "../styles/Login.module.css"
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
            await fetch('http://kweektafel.nybu-nerd.xyz/check_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username, 
                    password: this.state.password,
                })
            }).then((res) => {
		if (res.status == 200) {
		    window.location.href = "/cash_register"
		}
	    })
            .catch(err => console.log(err));
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
