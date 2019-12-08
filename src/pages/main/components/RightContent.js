import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: "white",
        padding: 20,
        marginBottom: 20
    }
}))

export default function RightContent() {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            Hello
        </div>
    )
}
