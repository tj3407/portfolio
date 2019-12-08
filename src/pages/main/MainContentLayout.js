import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";

const useStyle = makeStyles(theme => ({

}))

export default function MainContentLayout() {
  const classes = useStyle();

  return (
    <Grid container>
        <Grid item xs={12} md={8} lg={8}>
            <LeftContent />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
            <RightContent />
        </Grid>
    </Grid>
  )
}
