// MUI Imports
import type { Theme } from '@mui/material/styles'

const menuRootStyles = (theme: Theme) => {
  return {
    '& > ul > li:not(:last-of-type)': {
      marginInlineEnd: theme.spacing(1)
    }
  }
}

export default menuRootStyles
