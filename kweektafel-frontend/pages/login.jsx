import styles from "../styles/Login.module.css"
import routes from "../routes.json"
import React, { useState } from "react"

function Login() {

    const [credentials, setCredentials] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCredentials(values => ({...values, [name]: value}))
      }

    const checkLogin = (e) => {
        e.preventDefault();
        // fetch(routes.login, {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(credentials)
        // })
    }

    return (
        // <div className={styles.wrapper}>
        //     <div className={styles.loginbox}>
        //     {/* <p style={{color: "var(--HIGHLIGHT)", fontWeight: "bold", fontSize: "2vw"}}>Log in voor Kweektafel Kassa</p> */}
            
        //         <form className={styles.form} onSubmit={checkLogin}>
        //             <input type="text" name="username" placeholder="Gebruikersnaam" className={styles.input} onChange={handleChange}/>
        //             <input type="password" name="password" placeholder="Wachtwoord" className={styles.input} onChange={handleChange}/>
        //             <input type="submit" value="Submit" className={styles.button}/>
        //         </form>
        //     {/* <Button action={this.checkLogin} background_color={"var(--HIGHLIGHT)"} font_color={"var(--WHITE)"} width="25vw">Login</Button> */}
        //     </div>
        // </div>
        <div className={styles.loginPage}>
                <form>
                    <div className={styles.loginModal}>
                        <h3 className={styles.Item} style={{marginBottom: "10vh"}}>De Kweektafel</h3>
                        <div className={styles.Item}>
                            <label >Gebruikersnaam</label><br />
                            <input className={styles.InputBox} type="text" name="username" id="username" />
                        </div>
                        <div className={styles.Item}>
                            <label >Wachtwoord</label><br />
                            <input className={styles.InputBox} type="password" name="password" id="username" />
                        </div>
                        <div className={styles.submitButton}>
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                </form>
        </div>
    );

}

export default Login;