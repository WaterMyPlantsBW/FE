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

const NavItems = styled.li`
	padding: 1rem;
	margin-left: 0.5rem;
`;

const LoginBtn = styled(NavItems)`
	background: rgba(0, 0, 0, 0.2);
	margin: auto 0.5rem;
	padding: 0.6rem 1rem;
	border-radius: 10px;
	margin-left: 1.5rem;

	&:hover {
		background: #a0d2da;
		box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
		transition: all 0.2s ease;
		margin-bottom: 0.2rem;
	}
`;

const SignUpBtn = styled(NavItems)`
	background: #a0d2da;

	margin: auto 0.5rem;
	padding: 0.6rem 1rem;
	border-radius: 10px;
	box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);

	&:hover {
		transition: all 3s ease;
		margin-bottom: 0.2rem;
	}
`;

function Navbar() {
	return (
		<NavbarContainer>
			<h1>Plantz?</h1>
			<Ul>
				<NavItems>Home</NavItems>
				<LoginBtn>Log in</LoginBtn>
				<SignUpBtn>Sign up</SignUpBtn>
			</Ul>
		</NavbarContainer>
	);
}

export default Navbar;
