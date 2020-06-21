import React from "react"
import Typography from "@material-ui/core/Typography"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots"
import Box from "@material-ui/core/Box"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { Link } from "gatsby"
import Switch from "@material-ui/core/Switch"
import { useProfile } from "../../components/profile"
import ArticleSidebar from "../Article/Sidebar"
import AcUnitIcon from "@material-ui/icons/AcUnit"
import Tooltip from "@material-ui/core/Tooltip"
import Layout from "../Layout"
// import storage from "../../utility/storage";
// import Exchange from "../Exchange";

export const ToggleThemeButton = () => {
  const [{ theme }, setProfileValue] = useProfile()
  return (
    <Tooltip
      title={<Typography>Toggle Light / Dark Mode</Typography>}
    >
      <IconButton
        color={theme !== "light" ? "default" : "secondary"}
        onClick={() => {
          setProfileValue("theme", theme === "light" ? "dark" : "light")
        }}
      >
        <AcUnitIcon />
      </IconButton>
    </Tooltip>
  )
}

export const ToggleTheme = ({ color = "primary", labelPlacement }) => {
  const [{ theme }, setProfileValue] = useProfile()
  return (
    <Tooltip title={<Typography>Toggle Light / Dark Mode</Typography>}>
      <FormControlLabel
        label={theme !== "light" ? "Dark" : "Light"}
        labelPlacement={labelPlacement}
        control={
          <Switch
            color={color}
            checked={theme !== "light"}
            onChange={(event, checked) => {
              setProfileValue("theme", checked ? "dark" : "light")
            }}
          />
        }
      />
    </Tooltip>
  )
}

const Settings = () => {
  return (
    <div className="contained">
      <section>
        <Typography variant="subtitle1" color="textPrimary">
          Theme
        </Typography>
        <FormGroup>
          <ToggleTheme />
        </FormGroup>
      </section>

      <section>
        <List>
          <ListItem>
            <Link aria-label="terms" to="/terms/">
              <Button variant="contained">Terms and Conditions</Button>
            </Link>
          </ListItem>
        </List>
      </section>
    </div>
  )
}

export default () => {
  return (
    <Layout
      mountains
      content={
        <>
          <TopBannerDisplayAd />
          <Box pt={3}>
            <Typography
              variant="h1"
              color="textPrimary"
              className="text-center"
            >
              Settings
            </Typography>
          </Box>
          <Box p={3}>
            <Settings />
          </Box>
          <BottomBannerDisplayAd />
        </>
      }
      sidebar={<ArticleSidebar />}
    />
  )
}
