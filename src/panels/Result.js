import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import "./Сongratulation.css"
import Сongratulation from "./Сongratulation";

const osName = platform();

const Result = props => (
	<Panel id={props.id}>
		<div className="СongratulationFormSell">
			<div className='Сongratulation mx-auto'>
				<h2> Поздравляем! </h2>
				<p>Вы выграли {props.result}</p>
				<p>Вы можете поробовать еще один раз</p>

				<Button onClick={props.go} data-to="home" align='left'>
					Вращать еще раз
				</Button>
				<br/>
				<br/>
				<Button onClick={props.go} data-to="Сongratulation" align='right'>
					Забрать приз
				</Button>

			</div>
		</div>
	</Panel>
);

Result.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Result;
