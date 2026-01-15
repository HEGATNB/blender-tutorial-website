import '../styles/settingsPage.css'
import { useState } from 'react';

function Settings(){
    const [activePage, changePage] = useState('interface');

    const activeContent = () => {
        switch(activePage){
            case 'interface':
                return (
                    <div className="page-container">
                        <div className="settings-page-list">
                            <button
                                className="page-choose-button"
                                id="first"
                                style={{backgroundColor: '#4772b3'}}
                                onClick={() => changePage('interface')}
                            >
                                Интерфейс
                            </button>
                            <button
                                className="page-choose-button"
                                onClick={() => changePage('cookies')}
                            >
                                Куки
                            </button>
                            <button
                                className="page-choose-button"
                                id="last"
                                onClick={() => changePage('account')}
                            >
                                Аккаунт
                            </button>
                        </div>
                        <div className="settings-content">
                            <ul className="buttons-container">
                                <li className="description-and-button">
                                    <p className="button-description">яркость</p>
                                    <button className="settings-button">кнопка 1</button>
                                </li>
                                <li className="description-and-button">
                                    <p className="button-description">апатия</p>
                                    <button className="settings-button">кнопка 2</button>
                                </li>
                                <li className="description-and-button">
                                    <p className="button-description">муссон</p>
                                    <button className="settings-button">кнопка 3</button>
                                </li>
                                <li className="description-and-button">
                                    <p className="button-description">оливки</p>
                                    <button className="settings-button">кнопка 4</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            case 'cookies':
                return (
                    <div className="page-container">
                        <div className="settings-page-list">
                            <button
                                className="page-choose-button"
                                id="first"
                                onClick={() => changePage('interface')}
                            >
                                Интерфейс
                            </button>
                            <button
                                className="page-choose-button"
                                onClick={() => changePage('cookies')}
                                style={{backgroundColor: '#4772b3'}}
                            >
                                Куки
                            </button>
                            <button
                                className="page-choose-button"
                                id="last"
                                onClick={() => changePage('account')}
                            >
                                Аккаунт
                            </button>
                        </div>
                        <div className="settings-content">
                            <ul className="buttons-container">
                                <li className="description-and-button">
                                    <p className="button-description">яркость</p>
                                    <button className="settings-button">кнопка 1</button>
                                </li>
                                <li className="description-and-button">
                                    <p className="button-description">апатия</p>
                                    <button className="settings-button">кнопка 2</button>
                                </li>
                                <li className="description-and-button">
                                    <p className="button-description">муссон</p>
                                    <button className="settings-button">кнопка 3</button>
                                </li>
                                <li className="description-and-button">
                                    <p className="button-description">оливки</p>
                                    <button className="settings-button">кнопка 4</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            case 'account':
                return (
                    <div className="page-container">
                        <div className="settings-page-list">
                            <button
                                className="page-choose-button"
                                id="first"
                                onClick={() => changePage('interface')}
                            >
                                Интерфейс
                            </button>
                            <button
                                className="page-choose-button"
                                onClick={() => changePage('cookies')}
                            >
                                Куки
                            </button>
                            <button
                                className="page-choose-button"
                                id="last"
                                onClick={() => changePage('account')}
                                style={{backgroundColor: '#4772b3'}}
                            >
                                Аккаунт
                            </button>
                        </div>
                        <div className="settings-content">
                            <ul className="buttons-container">
                                <li className="description-and-button">
                                    <p className="button-description">хочу</p>
                                    <button className="settings-button">кнопка 1</button>
                                </li>
                                <li className="description-and-button">
                                    <p className="button-description">не хочу</p>
                                    <button className="settings-button">кнопка 2</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
        }
    }

    return <div>{activeContent()}</div>;
}

export default Settings;