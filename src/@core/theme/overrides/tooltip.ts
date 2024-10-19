// MUI Imports
import type { Theme } from '@mui/material/styles'

const tooltip: Theme['components'] = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        fontSize: theme.typography.subtitle2.fontSize,
        lineHeight: 1.53846,
        color: 'var(--mui-palette-customColors-tooltipText)',
        borderRadius: 'var(--mui-shape-customBorderRadius-md)',
        paddingInline: theme.spacing(3),
        margin: 0
      }),
      popper: {
        '&[data-popper-placement*="bottom"] .MuiTooltip-tooltip': {
          marginBlockStart: '6px !important'
        },
        '&[data-popper-placement*="top"] .MuiTooltip-tooltip': {
          marginBlockEnd: '6px !important'
        },
        '&[data-popper-placement*="left"] .MuiTooltip-tooltip': {
          marginInlineEnd: '6px !important'
        },
        '&[data-popper-placement*="right"] .MuiTooltip-tooltip': {
          marginInlineStart: '6px !important'
        }
      }
    }
  }
}

export default tooltip
