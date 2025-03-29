import React from 'react';
import tg from '../tg.svg';
import './main.css';

const Header = () => {
    return (
        <header className="text-white p-3 text-end">
            <ul className="list-unstyled">
                <li>
                    <p>
                        <img src={tg} style={{ height: '40px', width: 'auto', marginRight: '10px'}} alt="Logo" />
                        <a href='https://t.me/aukor_product' className="text-decoration-none hover-effect">Коршунов Андрей Юрьевич. </a> Руководитель. <b>PM</b> 
                    </p>
                </li>
            </ul>
        </header>
    );
};

export default Header;
