import React from 'react';
import item from '../data/data';
import styled from 'styled-components';
import Section from './Section';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
`;

function Home() {
	return (
		<Container>
			{item.map((val) => (
				<Section
					key={val.id}
					title={val.title}
					description={val.description}
					leftBtnText={val.leftBtnText}
					rightBtnText={val.rightBtnText}
					backgroundImg={val.backgroundImg}
				/>
			))}
		</Container>
	);
}

export default Home;
