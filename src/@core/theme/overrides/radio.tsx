// MUI Imports
import type { Theme } from '@mui/material/styles'

const IconChecked = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 18.5C8.41015 18.5 5.5 15.5899 5.5 12C5.5 8.41015 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.41015 18.5 12C18.5 15.5899 15.5899 18.5 12 18.5Z'
        fill='white'
        stroke='currentColor'
        strokeWidth='5'
      />
    </svg>
  )
}

const UncheckedIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z'
        stroke='var(--mui-palette-text-secondary)'
        strokeOpacity='0.7'
        strokeWidth='2'
      />
    </svg>
  )
}

const radio: Theme['components'] = {
  MuiRadio: {
    defaultProps: {
      icon: <UncheckedIcon />,
      checkedIcon: <IconChecked />
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
          '&.Mui-checked.MuiRadio-colorPrimary': {
            color: 'var(--mui-palette-primary-main)'
          },
          '&.Mui-checked.MuiRadio-colorSecondary': {
            color: 'var(--mui-palette-secondary-main)'
          },
          '&.Mui-checked.MuiRadio-colorError': {
            color: 'var(--mui-palette-error-main)'
          },
          '&.Mui-checked.MuiRadio-colorWarning': {
            color: 'var(--mui-palette-warning-main)'
          },
          '&.Mui-checked.MuiRadio-colorInfo': {
            color: 'var(--mui-palette-info-main)'
          },
          '&.Mui-checked.MuiRadio-colorSuccess': {
            color: 'var(--mui-palette-success-main)'
          }
        }
      })
    }
  }
}

export default radio
