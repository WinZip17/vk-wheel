import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import "./Сongratulation.css"

const Result = props => (
	<Panel id={props.id}>
		<div className="СongratulationFormSell">
			<div className='Сongratulation mx-auto'>
				<h2> Поздравляем! </h2>
				<p>Вы выграли {props.result}</p>
				<p>Вы можете попробовать еще один раз</p>

				<Button onClick={props.go} data-to="home" align='left'>
					Вращать еще раз
				</Button>
				<br/>
				<br/>
				<Button onClick={() => {
					props.sendResult(props.result)
				}} align='right'>
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
