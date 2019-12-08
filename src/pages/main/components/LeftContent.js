import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(theme => ({
    root: {
        marginRight: 50,
        marginBottom: 20,
        backgroundColor: "white",
        padding: 20
    }
}))

export default function LeftContent() {
    const classes = useStyle();

    return (
        <div className={`${classes.root} left-content`}>
            Hello
        </div>
    )
}
