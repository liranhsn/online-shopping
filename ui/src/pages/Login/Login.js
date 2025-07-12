import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';

import './Login.scss';

function Profile() {
    const [value, setValue] = React.useState('login');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box className="profile-container">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    centered
                    className="profile-container--tabs"
                >
                    <Tab
                        value="login"
                        label="משתמש קיים"
                        className="profile-container--tabs--tab"
                    />
                    <Tab
                        value="register"
                        label="רישום משתמש חדש"
                        className="profile-container--tabs--tab"
                    />
                </Tabs>
                <Login
                    value={value}
                    index={'login'}
                    handleNavigate={handleChange}
                />
                <Register
                    value={value}
                    index={'register'}
                    handleNavigate={handleChange}
                />
            </Box>
        </>
    );
}

export default Profile;
