import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { MainListItems, OtherListItems } from "./links";
import defaultCoins from "../Coin/defaultCoins"

export default ({ open }) => (
  <Drawer open={open} variant="permanent" style={{ overflowX: "hidden" }}>
    <MainListItems className={open ? "links open" : "links"} />
    <Divider />
    <OtherListItems className={open ? "links open" : "links"} />
    <div style={{ marginBottom: "4em" }} />
  </Drawer>
);
