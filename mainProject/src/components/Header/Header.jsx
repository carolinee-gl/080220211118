import React from 'react';
import avatar from '../../images/avatar.jpg'
import '../../App.css';

const Header = () => {
    return (
        <header className="item">
        <div className="itemPhoto">
          <img src={avatar}/>
        </div>
        <div className="itemInfo">
          <h1 className="itemName">Вероника Ростова</h1>
          <div className="itemJob">Менеджер по продажам</div>
          <p className="descriptionBlock">Подберу для вас самые лучшие предложения.
            <br />
            Мои услуги абсолютно бесплатны
          </p>
          <div className="servicesInfo">
            <div className="servicesHeader">Услуг</div>
            <ul className="servicesSeparators">
              <li className="servicesName">Ручное бронирование <span>11</span></li>
              <li className="servicesName servicesTours">Пакетные туры <span>3</span></li>
              <li className="servicesName servicesHotels ">Отели <span>1</span></li>
            </ul>
            <footer className="servicesAll">Всего <span>15</span></footer>
          </div>
        </div>
      </header>
    ) }

    export default Header;