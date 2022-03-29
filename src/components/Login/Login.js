import { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo-2724481_960_720.png';

function Login() {
	const initialState = {
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(initialState);
	const [emailErrors, setEmailErrors] = useState([]);
	const [passwordErrors, setPasswordErrors] = useState([]);

	function handleChange(event) {
		return setFormState({
			...formState,
			[event.target.id]: event.target.value,
		});
	}

	function handleEmailBlur(event) {
		console.log('you left the email field');
		// check the email input to see if it meets the validation criteria
		// does it contain @ and .
		const errors = [];

		// if not render the error messages
		if (!event.target.value.includes('@')) {
			errors.push([...emailErrors, 'Email must contain an @ symbol.']);
		}
		if (!event.target.value.includes('.')) {
			errors.push([...emailErrors, 'Email must contain at least one dot.']);
		}

		setEmailErrors(errors);
	}

	function handlePasswordBlur(event) {
		const errors = [];

		if (event.target.value.length < 8) {
			errors.push('Password must contain at least 8 characters.');
		}

		setPasswordErrors(errors);
	}

	return (
		<div className='login-page-container'>
			<div className='login-page-form-container'>
				<div className='logo-container'>
					<img src={logo} alt='logo' />
				</div>
				<form>
					<label htmlFor='email'>Email:</label>
					<input
						value={formState.email}
						type='text'
						required
						id='email'
						placeholder='Email Address'
						name='email'
						onChange={handleChange}
						onBlur={handleEmailBlur}
					/>
					{!!emailErrors.length &&
						emailErrors.map((error) => {
							return <p className='error-message'>{error}</p>;
						})}
					<label htmlFor='password'>Password:</label>
					<input
						value={formState.password}
						required
						type='password'
						id='password'
						placeholder='Password'
						name='password'
						onChange={handleChange}
						onBlur={handlePasswordBlur}
					/>
					{!!passwordErrors.length &&
						passwordErrors.map((error) => {
							return <p className='error-message'>{error}</p>;
						})}
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
