import { useState, useContext } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useAlert } from 'react-alert';

import { upsertUser } from '../../actions/userActions';
import { GlobalContext } from '../../context/GlobalContext';

import './Register.scss';

const Register = props => {
    const { setIsLoadingApp } = useContext(GlobalContext);
    const alert = useAlert();
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        setRegisterData(prevState => {
            return {
                ...prevState,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoadingApp(true);
        const result = await upsertUser(registerData);
        if (result.statusCode) {
            alert.error(`${result.diagnosticMessage}`);
            return setIsLoadingApp(false);
        }
        alert.success('ההרשמה בוצעה בהצלחה');
        props.handleNavigate(event, 'login');
        return setIsLoadingApp(false);
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
                className="register-container"
            >
                <div>
                    <TextField
                        required
                        onChange={handleChange}
                        name="firstName"
                        label="שם פרטי"
                        type="text"
                        value={registerData.firstName}
                        autoComplete="name"
                    />

                    <TextField
                        required
                        onChange={handleChange}
                        name="lastName"
                        label="שם משפחה"
                        type="text"
                        value={registerData.lastName}
                        autoComplete="lastName"
                    />

                    <TextField
                        required
                        onChange={handleChange}
                        name="email"
                        label='דוא"ל'
                        type="email"
                        value={registerData.email}
                        autoComplete="email"
                    />

                    <TextField
                        required
                        onChange={handleChange}
                        name="phone"
                        label="טלפון"
                        type="number"
                        value={registerData.phone}
                        autoComplete="phone"
                    />

                    <TextField
                        required
                        onChange={handleChange}
                        name="password"
                        label="סיסמה"
                        type="password"
                        value={registerData.password}
                        autoComplete="current-password"
                    />

                    <TextField
                        required
                        onChange={handleChange}
                        name="confirmPassword"
                        label="אישור סיסמה"
                        type="password"
                        value={registerData.confirmPassword}
                        autoComplete="current-password"
                    />
                </div>

                <Button
                    style={{ width: '100%' }}
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                >
                    הרשמה
                </Button>
            </Box>
        </div>
    );
};

export default Register;
