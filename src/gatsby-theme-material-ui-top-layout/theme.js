import { createMuiTheme } from "@material-ui/core/styles"

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#316799" },
    secondary: { main: "#f1c80f" },
  },
})

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: "#316799" },
    secondary: { main: "#f1c80f" },
  },
})


lightTheme.typography.h1 = lightTheme.typography.h4
darkTheme.typography.h1 = darkTheme.typography.h4

export default darkTheme
