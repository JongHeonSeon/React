/*eslint-disable*/
import React, { useEffect, useState } from "react";
import './Header.css';

function Header() {
    const login = () => {
        alert('Hello');
    };

    const loginKey = (event) => {
        if (event.keyCode === 13){
            login();
        };
    };


    return(
        <div className="Header">
            <div className="Header_wrap">
                <a href="#" className="Header__logo">React</a>
                <div className="Header__submit" onSubmit={login}>
                    <div className="Header__input_wrap">
                        <input type="text" className="Header__input_box" placeholder="ID" onKeyUp={loginKey} />
                        <input type="password" className="Header__input_box" placeholder="PW" onKeyUp={loginKey} />
                    </div>
                    <div className="Header__button_wrap">
                        <button className="Header__button" onClick={login}
                        >login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;