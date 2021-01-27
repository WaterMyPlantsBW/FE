import React from 'react';
import styled from 'styled-components';

//styled components
const NavbarContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	border-bottom: 1px solid #fff;
`;

const Ul = styled.ul`
	display: flex;
	list-style: none;
`;

const Li = styled.li`
	padding: 1rem;
	margin-left: 0.5rem;
`;

function Navbar() {
	return (
		<NavbarContainer>
			<h1>Plantz?</h1>
			<Ul>
				<Li>Home</Li>
				<Li>Login</Li>
				<Li>Signup</Li>
			</Ul>
		</NavbarContainer>
	);
}

export default Navbar;
