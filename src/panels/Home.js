import React, {useRef, useEffect, useState, createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';



let colors = ["#F84", "#8F4", "#48F", "#F8F"];
let sections = ["один", "два", "три", "четыре"];


const Home = (props) => {
	let {id, go, fetchedUser} = props;
	const canvas = useRef(null);
	const canvas2 = useRef(null);
	const canvas3 = useRef(null);
	let [innerWidth, setInnerWidth] = useState(400)
	let [innerHeight, setInnerHeight] = useState(400)
	let [result, setResult] = useState("")
	let wheels = null;
	let frame = null;
	let selected = null;
	let angle = 0, running = false;


	useEffect(() => {
		setInnerWidth(window.innerWidth)
		setInnerHeight(window.innerHeight)
	}, []);

	useEffect(() => {
		repaint(angle)
		if (canvas.current) {
			let csz = null;
			setInterval(function() {
				let sz = innerWidth + "/" + innerHeight;
				if (csz !== sz) {
					csz = sz;
					wheels = frame = null;
					repaint(angle);
				}
			}, 10);
		}
	}, [innerWidth, innerHeight]);



	const repaint = (angle) => {
	let r = Math.min(innerWidth, innerHeight) / 2.25 | 0;
	if (running || wheels === null) {
		wheels = [];
		for (let selected2=0; selected2<sections.length; selected2++) {
			let c = canvas.current;
			c.width = c.height = 2*r + 10;
			let ctx = c.getContext("2d"), cx = 5 + r, cy = 5 + r;
			// let ctx = createContext(c), cx = 5 + r, cy = 5 + r;
			let g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
			g.addColorStop(0, "rgba(0,0,0,0)");
			g.addColorStop(1, "rgba(0,0,0,0.5)");
			for (let i=0; i<sections.length; i++) {
				let a0 = 2*Math.PI*i/sections.length;
				let a1 = a0 + 2*Math.PI/(i == 0 ? 1 : sections.length);
				let a = 2*Math.PI*(i+0.5)/sections.length;
				ctx.beginPath();
				ctx.moveTo(cx, cy);
				ctx.arc(cx, cy, r, a0, a1, false);
				ctx.fillStyle = colors[i % 4];
				ctx.fill();
				ctx.fillStyle = g;
				ctx.fill();
				ctx.save();
				if (i == selected) {
					ctx.fillStyle = "#FFF";
					ctx.shadowColor = "#FFF";
					ctx.shadowBlur = r/20;
				} else {
					ctx.fillStyle = "#AAA";
					ctx.shadowColor = "#000";
					ctx.shadowBlur = r/100;
				}
				ctx.font = "bold " + r/sections.length*0.7 + "px serif";
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.translate(cx, cy);
				ctx.rotate(a);
				ctx.fillText(sections[i], r*0.62, 0);
				ctx.restore();
			}
			wheels.push(c);
		}
	}
	if (frame === null) {
		frame = canvas2.current;
		frame.width = frame.height = 10 + 2*r*1.25 | 0;
		let ctx2 = frame.getContext("2d"), cx = frame.width/2, cy = frame.height/2;
		// let ctx2 = createContext(frame), cx = frame.width/2, cy = frame.height/2;
		ctx2.shadowOffsetX = r/80;
		ctx2.shadowOffsetY = r/80;
		ctx2.shadowBlur = r/40;
		ctx2.shadowColor = "rgba(0,0,0,0.5)";
		ctx2.beginPath();
		ctx2.arc(cx, cy, r*1.025, 0, 2*Math.PI, true);
		ctx2.arc(cx, cy, r*0.975, 0, 2*Math.PI, false);
		ctx2.fillStyle = "#444";
		ctx2.fill();
		ctx2.shadowOffsetX = r/40;
		ctx2.shadowOffsetY = r/40;
		let g = ctx2.createRadialGradient(cx-r/7, cy-r/7, 0, cx, cy, r/3);
		g.addColorStop(0, "#FFF");
		g.addColorStop(0.2, "#F44");
		g.addColorStop(1, "#811");
		ctx2.fillStyle = g;
		ctx2.beginPath();
		ctx2.arc(cx, cy, r/3.5, 0, 2*Math.PI, false);
		ctx2.fill();
		ctx2.translate(cx, cy);
		ctx2.rotate(Math.PI - 0.2);
		ctx2.beginPath();
		ctx2.moveTo(- r*1.1, - r*0.05);
		ctx2.lineTo(- r*0.9, 0);
		ctx2.lineTo(- r*1.1, r*0.05);
		ctx2.fillStyle = "#F44";
		ctx2.fill();
	}
		canvas3.current.width = innerWidth;
		canvas3.current.height = innerHeight;
	let cx = innerWidth/2, cy = innerHeight/2;
	let ctx3 = canvas3.current.getContext("2d");
	selected = (Math.floor((- 0.2 - angle) * sections.length / (2*Math.PI))
		% sections.length);
	if (selected < 0) selected += sections.length;
	console.log(selected)
	ctx3.save();
	ctx3.translate(cx, cy);
	ctx3.rotate(angle);
	ctx3.translate(-wheels[selected].width/2, -wheels[selected].height/2);
	ctx3.drawImage(wheels[selected], 0, 0);
	ctx3.restore();
	ctx3.drawImage(frame, cx - frame.width/2, cy - frame.height/2);
	}


	const spin = (speed, duration) => {
		let start = performance.now(), angle0 = angle;
		function frame() {
			let now = performance.now();
			let t = (now - start) / duration;
			if (t > 1) t = 1;
			angle = angle0 + (speed*t - 0.5*speed*t*t)*100;
			repaint(angle);
			if (t < 1) requestAnimationFrame(frame); else {
				running = false
				setResult(sections[selected])
			};
		}
		requestAnimationFrame(frame);
		running = true;
	}

	const run = () => {
		if (!running) {
			spin(0.5+Math.random()*0.125, 5000);
		}
	};

	return (
		<Panel id={id}>
			<PanelHeader>Вращать колесо</PanelHeader>
			<Group>
				<canvas hidden={true} ref={canvas} id="canvas" width="956" height="754"></canvas>
				<canvas hidden={true} ref={canvas2} id="canvas" width="956" height="754"></canvas>
				<canvas ref={canvas3} id="canvas" width="956" height="754"></canvas>
			</Group>


			<Group>
				<Div>
					<Button size="xl" level="2" onClick={run}>
						Вращать колесо
					</Button>
				</Div>
				<Div>
					{result}
				</Div>
			</Group>
		</Panel>
	);
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
