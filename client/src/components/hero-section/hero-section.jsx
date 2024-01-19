import React, { Component } from 'react';
import style from './hero-section.module.css';


export class Main extends Component {
  render() {
    return (
      <>
        <div id="main" className={style.hero_section}>
          <div className={style.bg_hero}>
            <div className={style.container_title}>
              <h1>Это заголовок сайта</h1>
              <p>Это текст, призывающий нажать на кнопку и нанять нашу команду
                для разработки мобильного приложения для вашего бизнеса</p>
              <div>
                Заказать работу
              </div>
            </div>
            
          </div>
          <div className={style.container_hero_subtract}>
            <span className={style.hero_subtract}></span>
          </div>
        </div>
      </>
    )
  }
}

export default Main