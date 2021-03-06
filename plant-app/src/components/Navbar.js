import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser, userLoggedIn } from '../actions/index';

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
	justify-content: space-around;
	align-items: center;
`;

const NavItems = styled.li`
	padding: 1rem;
	margin-left: 0.5rem;
	font-weight: bold;
`;

const LoginBtn = styled(NavItems)`
	background: rgba(0, 0, 0, 0.2);
	padding: 0.6rem 1rem;
	border-radius: 10px;
	margin-left: 1.5rem;
	transition: all 0.2s ease-in-out;
	font-weight: bold;

	&:hover {
		color: #0f084b;
		background: rgb(160, 210, 218);
		box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
		margin-bottom: 0.5rem;
	}
`;

const SignUpBtn = styled(NavItems)`
	background: #a0d2da;
	color: #0f084b;
	font-weight: bold;
	padding: 0.6rem 1rem;
	border-radius: 10px;
	box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
	transition: all 0.2s ease-in-out;

	&:hover {
		margin-bottom: 0.5rem;
	}
`;

const LogOutBtn = styled(NavItems)`
	background: #a0d2da;
	color: #0f084b;
	font-weight: bold;
	padding: 0.6rem 1rem;
	border-radius: 10px;
	box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
	transition: all 0.2s ease-in-out;

	&:hover {
		margin-bottom: 0.5rem;
	}
`;

function Navbar({ isUserLoggedIn, logoutUser }) {
	return (
		<NavbarContainer>
			<h1>Plantz?</h1>
			<Ul>
				<Link style={{ color: '#fff' }} to="/">
					<NavItems>Home</NavItems>
				</Link>
				{isUserLoggedIn && (
					<Link style={{ color: '#fff' }} to="/plants">
						<NavItems>Plants</NavItems>
					</Link>
				)}

				{isUserLoggedIn === false ? (
					<>
						<Link style={{ color: '#fff' }} to="/login">
							<LoginBtn>Log in</LoginBtn>
						</Link>

						<Link style={{ color: '#fff' }} to="/signup">
							<SignUpBtn>Sign Up</SignUpBtn>
						</Link>
					</>
				) : null}

				{isUserLoggedIn && (
					<>
						<Link style={{ color: '#fff' }} to="/settings">
							<SignUpBtn>Settings</SignUpBtn>
						</Link>
						<Link style={{ color: '#fff' }} to="/" onClick={() => logoutUser()}>
							<LogOutBtn>Log out</LogOutBtn>
						</Link>
					</>
				)}
			</Ul>
		</NavbarContainer>
	);
}

const mapStateToProps = state => {
	return {
		isUserLoggedIn: state.isUserLoggedIn
	};
};

const mapDispatchToProps = { logoutUser };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
