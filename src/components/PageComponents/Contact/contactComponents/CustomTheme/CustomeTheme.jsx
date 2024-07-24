import { createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
      ...(outerTheme.palette.mode === 'dark' && {
        text: {
          primary: '#FFFFFF',
        },
      }),
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': outerTheme.palette.mode === 'dark' ? '#00FFFF' : '#E0E3E7',
            '--TextField-brandBorderHoverColor': outerTheme.palette.mode === 'dark' ? 'rgb(245,245,245)' : 'rgb(0,7,45)',
            '--TextField-brandBorderFocusedColor': outerTheme.palette.mode === 'dark' ? '#00FFFF' : 'rgb(25,118,210)',
            '& label.Mui-focused': {
              color: outerTheme.palette.mode === 'dark' ? '#00FFFF' : 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '1px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '1px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '1px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '1px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            ...(outerTheme.palette.mode === 'dark' && {
              backgroundColor: '#00FFFF',
              color: '#000000',
              '&:hover': {
                backgroundColor: '#00CCCC',
              },
            }),
          },
        },
      },
    },
  });

export default customTheme;
