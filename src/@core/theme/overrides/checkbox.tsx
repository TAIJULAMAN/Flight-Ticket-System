// MUI Imports
import type { Theme } from '@mui/material/styles'

const Icon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' fill='none'>
      <path
        d='M9 4H15C17.7614 4 20 6.23858 20 9V15C20 17.7614 17.7614 20 15 20H9C6.23858 20 4 17.7614 4 15V9C4 6.23858 6.23858 4 9 4Z'
        stroke='var(--mui-palette-text-secondary)'
        strokeOpacity='0.7'
        strokeWidth='2'
      />
    </svg>
  )
}

const IndeterminateIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 9C3 5.68629 5.68629 3 9 3H15C18.3137 3 21 5.68629 21 9V15C21 18.3137 18.3137 21 15 21H9C5.68629 21 3 18.3137 3 15V9Z'
        fill='currentColor'
      />
      <path d='M16 11.5H8V12.5H16V11.5Z' fill='white' />
    </svg>
  )
}

const CheckedIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 9C3 5.68629 5.68629 3 9 3H15C18.3137 3 21 5.68629 21 9V15C21 18.3137 18.3137 21 15 21H9C5.68629 21 3 18.3137 3 15V9Z'
        fill='currentColor'
      />
      <path
        d='M10.5001 14.0849L8.41508 11.9999L7.70508 12.7049L10.5001 15.4999L16.5001 9.49992L15.7951 8.79492L10.5001 14.0849Z'
        fill='white'
      />
    </svg>
  )
}

const checkbox: Theme['components'] = {
  MuiCheckbox: {
    defaultProps: {
      icon: <Icon />,
      indeterminateIcon: <IndeterminateIcon />,
      checkedIcon: <CheckedIcon />
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              padding: theme.spacing(1),
              '& svg': {
                fontSize: '1.25rem'
              }
            }
          : {
              padding: theme.spacing(1.5),
              '& svg': {
                fontSize: '1.5rem'
              }
            }),
        '&.Mui-checked:not(.Mui-disabled) svg': {
          filter: 'drop-shadow(var(--mui-customShadows-xs))'
        },
        '&.Mui-disabled': {
          opacity: 0.45,
          '&:not(.Mui-checked)': {
            color: 'var(--mui-palette-text-secondary)'
          },
          '&.Mui-checked.MuiCheckbox-colorPrimary': {
            color: 'var(--mui-palette-primary-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorSecondary': {
            color: 'var(--mui-palette-secondary-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorError': {
            color: 'var(--mui-palette-error-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorWarning': {
            color: 'var(--mui-palette-warning-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorInfo': {
            color: 'var(--mui-palette-info-main)'
          },
          '&.Mui-checked.MuiCheckbox-colorSuccess': {
            color: 'var(--mui-palette-success-main)'
          }
        }
      })
    }
  }
}

export default checkbox
