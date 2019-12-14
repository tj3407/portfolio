import React, { Suspense } from "react"
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
        <Typography>
          Local Time: 
          <Suspense fallback={<h1>Loading time...</h1>}>
            {time}
          </Suspense>
        </Typography>
      </div>
  )
}
