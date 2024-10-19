// MUI Imports
import type { Theme } from '@mui/material/styles'

const badges: Theme['components'] = {
  MuiBadge: {
    styleOverrides: {
      standard: ({ theme }) => ({
        height: 22,
        minWidth: 22,
        fontSize: theme.typography.subtitle2.fontSize,
        lineHeight: 1.07692,
        padding: theme.spacing(1, 2),
        borderRadius: 11
      })
    }
  }
}

export default badges
