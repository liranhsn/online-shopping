import { useState, useContext } from 'react';
import {
    CloseOutlined,
    PermIdentity,
    Menu,
    ShoppingCartOutlined,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

import DropDown from '../DropDown/DropDown';
import { CartContext } from '../../context/CartContext';
import AuthContext from '../../context/AuthContext';
import AccountMenu from '../AccountMenu/AccountMenu';

import './Header.scss';

function Header() {
    const Navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const authContext = useContext(AuthContext);

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const changeClick = () => {
        setClick(!click);
    };
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        setDropdown(prevState => !prevState);
    };

    return (
        <header className="header">
            <IconButton onClick={changeClick}>
                {!click ? (
                    <Menu aria-label="menu" color="secondary" />
                ) : (
                    <CloseOutlined aria-label="menu" color="secondary" />
                )}
            </IconButton>
            <div
                className="header--logo--container"
                onClick={() => Navigate('/')}
            >
                {/* <img
                    src={require('../../assets/logo.png')}
                    alt="logo"
                    className="header--logo"
                /> */}
                RH-Collection
            </div>
            {!authContext.isLoggedIn ? (
                <IconButton
                    color="secondary"
                    aria-label="Profile"
                    size="small"
                    className="iconIdentity"
                    onClick={() => Navigate('/login')}
                >
                    <PermIdentity fontSize="small" />
                </IconButton>
            ) : (
                <AccountMenu />
            )}
            <div className="header--cart--container">
                <IconButton
                    color="secondary"
                    aria-label="add to shopping cart"
                    size="small"
                    onClick={() => Navigate('/cart')}
                >
                    <ShoppingCartOutlined fontSize="small" />
                </IconButton>
                <div className="header-cart-counter">
                    {cartContext.cartContent?.length}
                </div>
            </div>

            {click && (
                <ul className="nav-side-menu start">
                    <Link
                        to="/"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        {'ראשי'}
                    </Link>

                    <div className="nav-items" onClick={onMouseEnter}>
                        <div className="nav-links">
                            {' קטגוריות מוצרים'}
                            <i className="fas fa-caret-down" />
                            {dropdown && (
                                <DropDown handleClick={closeMobileMenu} />
                            )}
                        </div>
                    </div>

                    <Link
                        to="/cards"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        {'החלפות/החזרות'}
                    </Link>

                    <Link
                        to="/sign-up"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        {'התחברות'}
                    </Link>
                </ul>
            )}
        </header>
    );
}

export default Header;
