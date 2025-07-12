import { useState, useContext } from 'react';
import { TextField, Checkbox, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

import { login } from '../../actions/userActions';
import AuthContext from '../../context/AuthContext';
import { GlobalContext } from '../../context/GlobalContext';

import './Login.scss';

const Login = props => {
    const Navigate = useNavigate();
    const alert = useAlert();
    const authContext = useContext(AuthContext);
    const { setIsLoadingApp } = useContext(GlobalContext);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        isRememberMe: false,
    });

    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        setLoginData(prevState => {
            return {
                ...prevState,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoadingApp(true);
        const result = await login(loginData);
        if (result.statusCode) {
            alert.error(`${result.diagnosticMessage}`);
            return setIsLoadingApp(false);
        }
        authContext.onLogin(result, loginData.isRememberMe);
        Navigate('/');
        alert.success('התחברת בהצלחה');
        setIsLoadingApp(false);
    };
    return (
        <div hidden={props.value !== props.index}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        width: '100%',
                    },
                }}
                noValidate={false}
                autoComplete="on"
                className="login-container"
            >
                <div>
                    <TextField
                        required
                        onChange={handleChange}
                        name="email"
                        label='דוא"ל'
                        type="email"
                        value={loginData.email}
                        autoComplete="email"
                    />

                    <TextField
                        required
                        onChange={handleChange}
                        name="password"
                        label="סיסמה"
                        type="password"
                        value={loginData.password}
                        autoComplete="current-password"
                    />
                    <Checkbox
                        id="isRememberMe"
                        checked={loginData.isRememberMe}
                        onChange={handleChange}
                        name="isRememberMe"
                    />
                    <label htmlFor="isRememberMe">זכור אותי?</label>
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                >
                    התחברות
                </Button>
            </Box>
        </div>
    );
};

export default Login;
