// MUI Imports
import type { Theme } from '@mui/material/styles'

const switchOverrides: Theme['components'] = {
  MuiSwitch: {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        '&:has(.Mui-disabled)': {
          opacity: 0.45
        },
        ...(ownerState.size !== 'small'
          ? {
              width: 46,
              height: 38,
              padding: theme.spacing(2.5, 2)
            }
          : {
              width: 42,
              height: 30,
              padding: theme.spacing(1.75, 2),
              '& .MuiSwitch-thumb': {
                width: 12,
                height: 12
              },
              '& .MuiSwitch-switchBase': {
                padding: 7,
                left: 3,
                '&.Mui-checked': {
                  left: -3
                }
              }
            })
      }),
      switchBase: ({ ownerState }) => ({
        ...(ownerState.size !== 'small'
          ? {
              top: 3,
              left: 1
            }
          : {
              top: 2,
              left: 1
            }),

        '&.Mui-checked': {
          left: -7,
          color: 'var(--mui-palette-common-white)',
          '& + .MuiSwitch-track': {
            opacity: 1
          }
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 1
        },
        '&:hover:not(:has(span.MuiTouchRipple-root))': {
          backgroundColor: 'transparent'
        }
      }),
      thumb: {
        width: 14,
        height: 14,
        boxShadow: 'var(--mui-customShadows-xs)'
      },
      track: ({ theme }) => ({
        opacity: 1,
        borderRadius: 10,
        backgroundColor: 'var(--mui-palette-action-focus)',
        boxShadow: `0 0 4px rgb(var(--mui-palette-common-${
          theme.palette.mode === 'light' ? 'onBackgroundChannel' : 'backgroundChannel'
        }) / 0.16) inset`
      })
    }
  }
}

export default switchOverrides
