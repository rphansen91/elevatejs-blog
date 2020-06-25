import React from "react"
import Typography from "@material-ui/core/Typography"
import icon from "../../images/elevatejs_logo.png"

export default ({ onClick, style }) => (
  <Typography
    variant="h4"
    onClick={onClick}
    style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    ELE<img
      alt="VA"
      src={icon}
      style={{ height: "2em", verticalAlign: "center" }}
    />TE
  </Typography>
)
