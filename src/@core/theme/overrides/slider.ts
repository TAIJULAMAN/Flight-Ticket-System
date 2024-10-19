// MUI Imports
import type { Theme } from '@mui/material/styles'

const slider: Theme['components'] = {
  MuiSlider: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        boxSizing: 'border-box',
        ...(ownerState.orientation === 'horizontal'
          ? ownerState.size !== 'small'
            ? { blockSize: 6 }
            : { blockSize: 4 }
          : ownerState.size !== 'small'
            ? { inlineSize: 6 }
            : { inlineSize: 4 }),
        '&.Mui-disabled': {
          opacity: 0.45,
          color: `var(--mui-palette-${ownerState.color}-main)`
        }
      }),
      thumb: ({ ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              blockSize: 14,
              inlineSize: 14,
              border: '2px solid currentColor',
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0 0 0 7px var(--mui-palette-${ownerState.color}-lightOpacity)`
              },
              '&.Mui-active.Mui-focusVisible': {
                boxShadow: `0 0 0 10px var(--mui-palette-${ownerState.color}-lightOpacity)`
              }
            }
          : {
              blockSize: 22,
              inlineSize: 22,
              border: '4px solid currentColor'
            }),
        backgroundColor: 'var(--mui-palette-common-white)',
        ...(!ownerState.disabled && {
          boxShadow: 'var(--mui-customShadows-sm)'
        }),
        '&:before': {
          boxShadow: 'none'
        },
        '&:after': {
          ...(ownerState.size === 'small'
            ? {
                blockSize: 28,
                inlineSize: 28
              }
            : {
                blockSize: 38,
                inlineSize: 38
              })
        },
        '&:hover, &.Mui-focusVisible': {
          boxShadow: `0 0 0 8px var(--mui-palette-${ownerState.color}-lightOpacity)`
        },
        '&.Mui-active.Mui-focusVisible': {
          boxShadow: `0 0 0 13px var(--mui-palette-${ownerState.color}-lightOpacity)`
        }
      }),
      rail: ({ ownerState }) => ({
        opacity: 1,
        color: `var(--mui-palette-${ownerState.color}-lightOpacity)`,
        ...(ownerState.track === 'inverted' && {
          backgroundColor: `var(--mui-palette-${ownerState.color}-main)`
        })
      }),
      valueLabel: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              ...theme.typography.caption,
              borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
              padding: theme.spacing(1, 2)
            }
          : {
              ...theme.typography.body2,
              fontWeight: theme.typography.fontWeightMedium,
              borderRadius: 'var(--mui-shape-customBorderRadius-md)',
              padding: theme.spacing(1, 2.5)
            }),
        color: 'var(--mui-palette-customColors-tooltipText)',
        backgroundColor: 'var(--mui-palette-Tooltip-bg)',
        '&:before': {
          display: 'none'
        }
      }),
      track: ({ theme, ownerState }) => ({
        ...(ownerState.track === 'inverted' && {
          backgroundColor: `color-mix(in srgb, ${theme.palette[ownerState.color || 'primary'].main} 16%, var(--mui-palette-background-paper))`,
          borderColor: `color-mix(in srgb, ${theme.palette[ownerState.color || 'primary'].main} 16%, var(--mui-palette-background-paper))`
        })
      })
    }
  }
}

export default slider
