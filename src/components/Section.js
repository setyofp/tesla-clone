import React from 'react';
import styled from 'styled-components';

function Section({
	title,
	description,
	leftBtnText,
	rightBtnText,
	backgroundImg,
}) {
	return (
		<Wrap bgImg={backgroundImg}>
			<ItemText>
				<h1>{title}</h1>
				<p>{description}</p>
			</ItemText>
			<Buttons>
				<ButtonGroup>
					<LeftButton>{leftBtnText}</LeftButton>
					<RightButton>{rightBtnText}</RightButton>
				</ButtonGroup>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	/* background-image: url('/images/model-s.jpg'); */
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-image: ${(props) => `url("images/${props.bgImg}.jpg")`};
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
	line-height: 1.5;
	color: #393c41;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const LeftButton = styled.div`
	background-color: rgba(20, 20, 20, 0.8);
	color: white;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 12px;
	cursor: pointer;
	height: 40px;
	width: 256px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	margin: 8px;
	letter-spacing: 1px;
	opacity: 0.9;
	@media (max-width: 768px) {
		width: 300px;
	}
`;

const RightButton = styled(LeftButton)`
	background-color: rgba(256, 256, 256, 0.8);
	color: #121212;
`;

const DownArrow = styled.img`
	height: 40px;
	margin-top: 16px;
	animation: arrowBounce 1s infinite;
`;