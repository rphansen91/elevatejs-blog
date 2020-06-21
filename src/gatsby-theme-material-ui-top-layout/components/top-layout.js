import React from 'react'
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from "@date-io/moment";
import { useProfile } from "../../components/profile";
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";
import { darkTheme, lightTheme } from '../theme';

const themes = {
  light: lightTheme, 
  dark: darkTheme
}

export default ({ children }) => {
  const [{ theme }] = useProfile()
  return (
    <ThemeTopLayout theme={themes[theme] || darkTheme}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {children}
      </MuiPickersUtilsProvider>
    </ThemeTopLayout>
  )
}
