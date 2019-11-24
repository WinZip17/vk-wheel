import React from 'react';
import "./Сongratulation.css"
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';


const Сongratulation = (props) => {
    const time = new Date().getHours();
    const workTime = `Ваш приз ${props.result}, мы свяжемся с Вами в ближайшие 30 минут`;
    const nonWorkTime = `Ваш приз ${props.result}, наш менеджер свяжется с Вами завтра до 11:00`;

    return (
        <Panel id={props.id} className="СongratulationFormSell">
            <div className='Сongratulation mx-auto'>
                <h2>{time < 9 || time > 21 ? nonWorkTime : workTime}</h2>
            </div>
        </Panel>
    );
}

export default Сongratulation;
