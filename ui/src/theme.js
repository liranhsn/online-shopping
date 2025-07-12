import { createTheme } from '@mui/material';

export const customTheme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#f0f0f0',
        },
    },
    typography: {
        fontSize: 16,
        button: {
            textTransform: 'none',
        },
    },
});
