import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
	const masterData = [
		{
			id: 0,
			title: 'Model S',
			description: 'Order Online for Touchless Delivery',
			leftBtnText: 'Custom Order',
			rightBtnText: 'Existing Inventory',
			backgroundImg: 'model-s',
		},
		{
			id: 1,
			title: 'Model Y',
			description: 'Order Online for Touchless Delivery',
			leftBtnText: 'Custom Order',
			rightBtnText: 'Existing Inventory',
			backgroundImg: 'model-y',
		},
		{
			id: 2,
			title: 'Model 3',
			description: 'Order Online for Touchless Delivery',
			leftBtnText: 'Custom Order',
			rightBtnText: 'Existing Inventory',
			backgroundImg: 'model-3',
		},
		{
			id: 3,
			title: 'Model X',
			description: 'Order Online for Touchless Delivery',
			leftBtnText: 'Custom Order',
			rightBtnText: 'Existing Inventory',
			backgroundImg: 'model-x',
		},
		{
			id: 4,
			title: 'Solar Panel',
			description: 'Lowest Cost Solar Panels in America',
			leftBtnText: 'Order Now',
			rightBtnText: 'Learn More',
			backgroundImg: 'solar-panel',
		},
		{
			id: 5,
			title: 'Solar Roof',
			description: 'Produce Clean Energy From Your Roof',
			leftBtnText: 'Order Now',
			rightBtnText: 'Learn More',
			backgroundImg: 'solar-roof',
		},
		{
			id: 6,
			title: 'Accessories',
			description: '',
			leftBtnText: 'Order Now',
			backgroundImg: 'accessories',
		},
	];

	return (
		<Container>
			{masterData.map((val) => (
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

const Container = styled.div`
	height: 100vh;
	width: 100vw;
`;
