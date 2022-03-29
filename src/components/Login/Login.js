import React from 'react';
import './Login.css';
import logo from '../../assets/logo-2724481_960_720.png';

function Login() {
	return (
		<div className='login-page-container'>
			<div className='login-page-form-container'>
				<div className='logo-container'>
					<img src={logo} alt='logo' />
				</div>
				<form>
					<input type='email' placeholder='Email Address' name='email' />

					<input type='password' placeholder='Password' name='password' />

					<input className='login-button' type='submit' value='Login' />
				</form>
				<div className='form-bottom-links'>
					<div className='other-links'>
						<a href='#'>Forgot my password</a> |<a href='#'> Sign Up</a>
					</div>
					<div className='copyright'>&copy; 2019 A Company</div>
				</div>
			</div>
			<div className='support'>
				<p>
					Need help? No problem! Email{' '}
					<a href='mailto:support@acompany.com'>support@acompany</a> or call
					800-377-6915.
				</p>
			</div>
		</div>
	);
}

export default Login;
