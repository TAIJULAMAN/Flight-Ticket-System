// MUI Imports
import type { Theme } from '@mui/material/styles'

const pagination: Theme['components'] = {
  MuiPagination: {
    styleOverrides: {
      ul: {
        rowGap: 6
      }
    },
    variants: [
      {
        props: { variant: 'text', color: 'primary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-primary-main)',
            color: 'var(--mui-palette-primary-contrastText)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-secondary-main)',
            color: 'var(--mui-palette-secondary-contrastText)'
          }
        }
      },
      {
        props: { variant: 'outlined' },
        style: {
          '& .MuiPaginationItem-root': {
            borderColor: 'var(--mui-palette-customColors-inputBorder)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            color: 'var(--mui-palette-primary-main)',
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            borderColor: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            color: 'var(--mui-palette-secondary-main)',
            backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
            borderColor: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'tonal' },
        style: {
          '& .MuiPaginationItem-root:not(.MuiPaginationItem-ellipsis)': {
            backgroundColor: 'var(--mui-palette-action-selected)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'standard' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            color: 'var(--mui-palette-primary-main)',
            '&:hover': {
              backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
            }
          },
          '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
            backgroundColor: 'var(--mui-palette-action-disabledBackground)'
          },
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            color: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'primary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--mui-palette-primary-main)',
            color: 'var(--mui-palette-primary-contrastText)',
            '&:not(.Mui-disabled)': {
              boxShadow: 'var(--mui-customShadows-xs)'
            },
            '&:hover': {
              backgroundColor: 'var(--mui-palette-primary-dark)'
            }
          },
          '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            color: 'var(--mui-palette-primary-main)'
          },
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-primary-main)',
            color: 'var(--mui-palette-primary-contrastText)'
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'secondary' },
        style: {
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--mui-palette-secondary-main)',
            color: 'var(--mui-palette-secondary-contrastText)',
            '&:not(.Mui-disabled)': {
              boxShadow: 'var(--mui-customShadows-xs)'
            },
            '&:hover': {
              backgroundColor: 'var(--mui-palette-secondary-dark)'
            }
          },
          '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
            backgroundColor: 'var(--mui-palette-secondary-mainOpacity)',
            color: 'var(--mui-palette-text-primary)'
          },
          '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
            backgroundColor: 'var(--mui-palette-secondary-main)',
            color: 'var(--mui-palette-secondary-contrastText)'
          }
        }
      }
    ]
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.size === 'medium' && {
          height: '2.375rem',
          minWidth: '2.375rem'
        }),
        ...(ownerState.size === 'large' && {
          ...theme.typography.body1
        }),
        ...(ownerState.shape !== 'rounded' && {
          borderRadius: '50px'
        }),
        '& i, & svg': {
          ...(ownerState.size === 'small'
            ? {
                height: '1.25rem',
                minWidth: '1.25rem'
              }
            : ownerState.size === 'large'
              ? {
                  height: '1.5rem',
                  minWidth: '1.5rem'
                }
              : {
                  height: '1.375rem',
                  minWidth: '1.375rem'
                })
        },
        '&.Mui-selected.Mui-disabled': {
          color: 'var(--mui-palette-text-primary)',
          opacity: 0.45
        },
        '&.Mui-disabled': {
          opacity: 0.45
        },
        ...(ownerState.shape === 'rounded' &&
          ownerState.size === 'small' && {
            borderRadius: 'var(--mui-shape-customBorderRadius-md)'
          }),
        ...(ownerState.shape === 'rounded' &&
          ownerState.size === 'medium' && {
            borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
          })
      }),
      ellipsis: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      sizeSmall: {
        height: '2.125rem',
        minWidth: '2.125rem'
      },
      sizeLarge: {
        height: '2.625rem',
        minWidth: '2.625rem'
      }
    }
  }
}

export default pagination
