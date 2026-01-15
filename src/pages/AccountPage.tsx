import '../styles/AccountPage.css'
import { useState } from 'react'

function Account(){
    const [isLogged,setLogged] = useState(false);
    const setPageContent = () =>{
        switch(isLogged){
            case true:
                return(
            <div className="main-page-container">
                <div className="account-info">
                </div>
            </div>
            )
            case false:
                     return(
                <div className="main-page-container">
                    <div className="login-window">
                        <ul className="input-window-description-list">
                            <li className = "input-window-description">
                                <p className="description-text">логин</p>
                                <input className="data-input-window" placeholder="введите свой логин или email"></input>
                            </li>
                            <li className = "input-window-description">
                                <p className="description-text">пароль</p>
                                <input className="data-input-window" placeholder="введите свой пароль"></input>
                            </li>
                        </ul>
                        <button className="input-confirm-button">Войти</button>
                        <div className="additional-options">
                            <button className="options-button">нет аккаунта</button>
                            <button className="options-button">восстановление пароля</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
return(<div>{setPageContent()}</div>)
}

export default Account