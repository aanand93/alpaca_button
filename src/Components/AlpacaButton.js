import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const AlpacaButton = ({ children, type, onClick, buttonStyle, buttonSize }) => {
	const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    `;

	const Rotate = styled.div`
		display: inline-block;
		animation: ${rotate} 4s linear infinite;
		padding: 2rem 1rem;
		font-size: 1.2rem;
	`;

	return (
		<div>
			<Rotate>
				<button onClick={onClick} type={type}>
					{children}
				</button>
			</Rotate>
		</div>
	);
};

export default AlpacaButton;
