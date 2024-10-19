// MUI Imports
import type { Theme } from '@mui/material/styles'

const progress: Theme['components'] = {
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        blockSize: 6,
        borderRadius: 'var(--mui-shape-borderRadius)',
        '& .MuiLinearProgress-bar': {
          borderRadius: 'var(--mui-shape-borderRadius)'
        },
        '& .MuiLinearProgress-dashed': {
          marginBlockStart: theme.spacing(0.2)
        }
      })
    }
  }
}

export default progress
