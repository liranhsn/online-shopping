import { RememberMe } from '@mui/icons-material';
import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: email => {},
    onLogin: user => {},
    user: {},
});

export function AuthContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedUserLoggedInInformation = JSON.parse(
            localStorage.getItem('user'),
        );

        if (storedUserLoggedInInformation) {
            setIsLoggedIn(true);
            setUser(storedUserLoggedInInformation);
        } else {
            setIsLoggedIn(false);
            setUser({});
        }
    }, []);

    const logoutHandler = () => {
        setIsLoggedIn(false);
        setUser({});

        if (user.isRememberMe === false) {
            localStorage.removeItem('user');
        }
    };

    const loginHandler = (user, isRememberMe) => {
        setIsLoggedIn(true);
        setUser(user);

        if (isRememberMe === true) {
            setUser(prevState => {
                return { ...prevState, [isRememberMe]: true };
            });
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                user: user,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
