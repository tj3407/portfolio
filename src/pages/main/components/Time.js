import React from "react"
import { Typography } from "@material-ui/core"

export default function Time() {
  const [time, setTime] = React.useState("")
  let date = new Date()

  React.useEffect(() => {
    setTimeout(() => {
        setTime(date.toLocaleString())
    }, 1000);
  })

  return (
    <div>
      <Typography>Local Time: {time}</Typography>
    </div>
  )
}
