import '../styles/AccountPage.css'
import { useState, useRef } from 'react'
import validation from '../components/validation.tsx'

function Account(){
    const [pageContent, setPageContent] = useState('login')
    const [emailError, setEmailError] = useState(false);       //хук для ошибки в логине
    const [passwordError, setPasswordError] = useState(false); //хук для ошибки в пароле

    const isActiveRequest = useRef(false);             //ссылка для запроса в процессе
    const lastRequestRef = useRef<number>(0);        //ссылка для последнего запроса
    const REQUEST_DELAY = 2000;

    const emailRef = useRef<HTMLInputElement>(null);      //ссылка на ввод эмейла
    const passwordRef = useRef<HTMLInputElement>(null);   //ссылка на ввод пароля
    const newEmailRef = useRef<HTMLInputElement>(null);
    const newPasswordRef = useRef<HTMLInputElement>(null);


    const handleButtonClickRegister = async () => {
        const newEmail = newEmailRef.current?.value || '';
        const newPassword = newPasswordRef.current?.value || '';

        const validationResult = validation(newEmail, newPassword);  //результат проверки

        setEmailError(!validationResult.emailBool);  // Обновляем состояния ошибок
        setPasswordError(!validationResult.passwordBool);

        if (validationResult.emailBool && validationResult.passwordBool) {
            try {
                const response = await fetch('http://localhost:3000/register', {  //ждем ответ сервера
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({  //отправляем эмейл и пароль на сервер
                        newEmail: newEmail,
                        newPassword: newPassword
                    })
                });
                if (response.ok) {
                    console.log('Регистрация успешна');
                    setPageContent('login');
                } else {
                    console.error('Ошибка при регистрации');
                }
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
            }
        }
    }

    const handleButtonClickLogin = async () => {
        const email = emailRef.current?.value || '';
        const password = passwordRef.current?.value || '';

        const validationResult = validation(email, password);  //результат проверки
        setEmailError(!validationResult.emailBool);  // Обновляем состояния ошибок
        setPasswordError(!validationResult.passwordBool);

        if (validationResult.emailBool && validationResult.passwordBool) {  //проверяем логин и пароль
            const now = Date.now();

            if (isActiveRequest.current) return;           //если есть активный запрос следующий не отправляем
            if (now - lastRequestRef.current < REQUEST_DELAY) return;

            isActiveRequest.current = true;
            lastRequestRef.current = now;

            try {
                const response = await fetch('http://localhost:3000/login', {  //ждем ответ сервера
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({  //отправляем эмейл и пароль на сервер
                        email: email,
                        password: password
                    })
                });
                const data = await response.json();

                data.success ? setPageContent('active') : setEmailError(true) & setPasswordError(true); //входим или выдаем ошибку

                if (response.ok) {
                    console.log('Данные успешно отправлены');
                } else {
                    console.error('Ошибка при отправке данных');
                }
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
            }
            isActiveRequest.current = false;
        }
    }

    const showPage = () =>{
        switch(pageContent){
            case 'active':
                return(
            <div className="main-page-container">
                <div className="account-info">
                </div>
            </div>
            )
            case 'recover':
                return(
                     <div className="main-page-container">
                        <div className="login-window">
                            <ul className="input-window-description-list">
                                <li className = "input-window-description">
                                    <p className="description-text" >Введите почту которая привязана к аккаунту</p>
                                    <input
                                         className="data-input-window"
                                         placeholder="введите свой email"
                                         required = ""
                                         ref = {emailRef}
                                         id = {emailError ? "error" : ""}
                                    >
                                    </input>
                                </li>
                            </ul>
                            <div className="password-reset-buttons">
                                <button className="input-confirm-button" id="decline" onClick = {() => setPageContent('login')} >Отмена</button>
                                <button className="input-confirm-button" onClick = {() => setPageContent('login')} >Сбросить пароль</button>
                            </div>
                        </div>
                     </div>
                    )
            case  'register':
                return(
                    <div className="main-page-container">
                        <div className="login-window">
                            <ul className="input-window-description-list">
                                <li className = "input-window-description">
                                    <p className="description-text">логин</p>
                                    <input
                                         className="data-input-window"
                                         placeholder="введите свой логин или email"
                                         name = "email"
                                         required = ""
                                         ref = {newEmailRef}
                                         id = {emailError ? "error" : ""}
                                    >
                                    </input>
                                </li>
                                <li className = "input-window-description">
                                    <p className="description-text">пароль</p>
                                    <input
                                        className="data-input-window"
                                        placeholder="введите свой пароль"
                                        type = "password"
                                        required = ""
                                        name="password"
                                        ref = {newPasswordRef}
                                        id = {passwordError ? "error" : ""}
                                    >
                                    </input>
                                </li>
                                <li className = "input-window-description">
                                    <p className="description-text">подтвердите пароль</p>
                                    <input
                                        className="data-input-window"
                                        placeholder="введите пароль снова"
                                        onPaste="return false;"
                                        type = "password"
                                        required = ""
                                        id = {passwordError ? "error" : ""}
                                    >
                                    </input>
                                </li>
                            </ul>
                            <div className="password-reset-buttons">
                                <button className="input-confirm-button" id="decline" onClick = {() => setPageContent('login')} >Отмена</button>
                                <button className="input-confirm-button" onClick = {() => {handleButtonClickRegister(); }} >Продолжить</button>
                            </div>
                        </div>
                    </div>
                )
            case 'login':
                     return(
                <div className="main-page-container">
                    <div className="login-window">
                        <ul className="input-window-description-list">
                            <li className = "input-window-description">
                                <p className="description-text">логин</p>
                                <input
                                     className="data-input-window"
                                     placeholder="введите свой логин или email"
                                     required = ""
                                     ref = {emailRef}
                                     id = {emailError ? "error" : ""}
                                >
                                </input>
                            </li>
                            <li className = "input-window-description">
                                <p className="description-text">пароль</p>
                                <input
                                    className="data-input-window"
                                    placeholder="введите свой пароль"
                                    type = "password"
                                    required = ""
                                    ref = {passwordRef}
                                    id = {passwordError ? "error" : ""}
                                >
                                </input>
                            </li>
                        </ul>
                        <button className="input-confirm-button" onClick = {handleButtonClickLogin} >Войти</button>
                        <div className="additional-options">
                            <button className="options-button"
                             onClick = {() => setPageContent('register')}
                             >
                                нет аккаунта</button>
                            <button className="options-button"
                            onClick = {() => setPageContent('recover')}
                            >
                                восстановление пароля
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
return(<div>{showPage()}</div>)
}

export default Account