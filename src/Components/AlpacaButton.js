import React from 'react';
import './AlpacaButton.css';
import logo2 from '../Alpacas/Alpaca2.jpeg';
import logo3 from '../Alpacas/Alpaca3.jpeg';
import logo4 from '../Alpacas/Alpaca4.jpeg';
import logo6 from '../Alpacas/Alpaca6.jpeg';
import logo7 from '../Alpacas/Alpaca7.jpeg';
import logo8 from '../Alpacas/Alpaca8.jpeg';
import logo9 from '../Alpacas/Alpaca9.jpeg';
import logo10 from '../Alpacas/Alpaca10.jpeg';

const STYLES = ['btn--primary--solid', 'btn--success--solid'];

const SIZES = ['btn--medium', 'btn--small'];

const AlpacaButton = ({ children, type, onClick, buttonStyle, buttonSize }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

	var newPic = {};
    var img = document.querySelector('img')

	const alpacaArray = [logo2, logo3, logo4, logo6, logo7, logo8, logo9, logo10];
	const alpacaClick = (e) => {
		e.preventDefault();
		const newPic = alpacaArray[Math.floor(Math.random() * alpacaArray.length)];

        img.src = newPic
		return console.log(newPic);
	};

	return (
		<div className='AlpacaButton'>
			<button
				className={`btn ${checkButtonStyle} ${checkButtonSize}`}
				onClick={alpacaClick}
				type={type}>
				{children}
			</button>
			<div className='images'>
				<img id='img' src={logo2} alt='alpaca' />
			</div>
		</div>
	);
};

export default AlpacaButton;
