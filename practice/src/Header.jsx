/*eslint-disable*/
import React, { useState } from "react";
import './Header.css';

function Header() {
    const [title] = useState('REACT');

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        alert('Submit Complete');
        console.log(id, pw);
    }

    return(
        <div className="Header">
            <div className="Header_wrap">
                <a href="#" className="Header__logo">{title}</a>
                <form onSubmit={onSubmit}>
                    <div className="Header__submit">
                        <div className="Header__input_wrap">
                            <input type="text" className="Header__input_box" placeholder="ID" value={id}
                            onChange={(e) => setId(e.target.value)} />
                            <input type="password" className="Header__input_box" placeholder="PW" value={pw}
                            onChange={(e) => setPw(e.target.value)} />
                        </div>
                        <div className="Header__button_wrap">
                            <button className="Header__button" type="submit"
                            >login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Header;