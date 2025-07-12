import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import { useNavigate } from 'react-router';
import { useAlert } from 'react-alert';

import AuthContext from '../../context/AuthContext';
import { GlobalContext } from '../../context/GlobalContext';

import './AccountMenu.scss';

export default function AccountMenu() {
    const authContext = React.useContext(AuthContext);
    const { setIsLoadingApp } = React.useContext(GlobalContext);
    const Navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const alert = useAlert();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        setIsLoadingApp(true);
        authContext.onLogout();

        setTimeout(() => {
            alert.info('התנתקת בהצלחה');
            setIsLoadingApp(false);
            Navigate('/');
        }, 1000);
    };
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginRight: 'auto',
                }}
            >
                <Tooltip>
                    <IconButton
                        color="secondary"
                        aria-label="Profile"
                        size="small"
                        onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <HowToRegOutlinedIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: 2,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 40,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div style={{ textAlign: 'center' }}>
                    {authContext.user.firstName +
                        '  ' +
                        authContext.user.lastName}
                </div>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    עריכת פרופיל
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PaymentTwoToneIcon fontSize="small" />
                    </ListItemIcon>
                    אמצעי תשלום
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <LocalMallTwoToneIcon fontSize="small" />
                    </ListItemIcon>
                    היסטריית הזמנות
                </MenuItem>

                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    התנתקות
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
