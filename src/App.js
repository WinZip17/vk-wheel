import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import './app.css'
import Home from './panels/Home';
import Result from './panels/Result';
import Сongratulation from "./panels/Сongratulation";


//ИД пользователя, которому отправлять заказ
const user_id1 = "184750457";
// const user_id2 = "1587067";


//ИД привязаной кгрупы с добавленным минусом
const group_id = '-189092828';

//токен из настройки группы
const token = "a2d7546a9a8d0056331bbc2b99a3432dd9750aa3a0d3561de6b6482b0592015bb97e321ffa210f48a9ea8";

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);
	const [result, setResult] = useState(null);
	const [attempts, setAttempts] = useState(0);



	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
			if (type === 'VKWebAppCallAPIMethodResult') {
				if (activePanel !== "Сongratulation") {
					setPopout(null);
					setActivePanel("Сongratulation")
				}
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);



	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const sendResult = (result) => {
		let wellDate = new Date();
		let sendInfo = `Пользователь: https://vk.com/id${fetchedUser.id}, имя: ${fetchedUser.first_name}. Вращал колесо:  ${wellDate.toLocaleString("ru", {year: 'numeric', month: 'long', day: 'numeric', timezone: 'UTC', hour: 'numeric', minute: 'numeric', second: 'numeric'})}. Выграл: ${result}`
		let guid1 = Math.floor(1000000000 + Math.random() * (9000000000 + 1 - 1000000000));
		// let guid2 = Math.floor(1000000000 + Math.random() * (9000000000 + 1 - 1000000000));
		connect.send("VKWebAppCallAPIMethod", {
			"method": "messages.send",
			"request_id": "sendOrder",
			"params": {
				"user_id": user_id1,
				"v": "5.102",
				"random_id": guid1,
				"peer_id": group_id,
				"message": sendInfo,
				"access_token": token
			}
		});
		//
		// connect.send("VKWebAppCallAPIMethod", {
		// 	"method": "messages.send",
		// 	"request_id": "sendOrder",
		// 	"params": {
		// 		"user_id": user_id2,
		// 		"v": "5.102",
		// 		"random_id": guid2,
		// 		"peer_id": group_id,
		// 		"message": sendInfo,
		// 		"access_token": token
		// 	}
		// });
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} setActivePanel={setActivePanel}
				  result={result} setResult={setResult}
				  setAttempts={setAttempts}
				  attempts={attempts}
				  sendResult={sendResult}
				  setPopout={setPopout}
			/>
			<Result id='result' go={go} result={result} setActivePanel={setActivePanel} sendResult={sendResult} setPopout={setPopout}/>
			<Сongratulation id='Сongratulation' go={go} result={result}/>
		</View>
	);
}

export default App;

