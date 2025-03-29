import React from 'react';
import logo from '../pologo.svg'
import './main.css'

const MainContent = () => {
    return (
        <main className="text-center bg-dark text-white">
            <section class="adv-card">
            <img class="adv-img" src={logo} alt="Лого ПО"></img>

            <h1 class="adv-title rubik-title">
                ПРОЕКТНЫЙ ОФИС
            </h1>

            <p class="adv-descr montserrat-text">
                Дарим крылья мечтам студентов
            </p>

        </section>
        </main>
    );
};

export default MainContent;
