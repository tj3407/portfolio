import React from "react"
import { Typography, IconButton } from "@material-ui/core"
import CodeIcon from "@material-ui/icons/Code"

export default function Time() {
  const [time, setTime] = React.useState("")
  const [showCode, setShowCode] = React.useState(false)
  let date = new Date()

  React.useEffect(() => {
    setTimeout(() => {
      setTime(date.toLocaleString())
    }, 1000)
  })

  return (
    <div>
      <div style={{marginBottom: "20px"}}>
        <Typography variant="h6" color="textSecondary" >
          RUNNING TIME
        </Typography>
        <Typography variant="caption" >
          {'\t'}Clock display that updates every second
        </Typography>
      </div>
      <Typography paragraph color="textSecondary" style={{border: "1px solid silver", padding: "20px"}}>
        <strong>Local Time: </strong>
        {time}
      </Typography>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={() => setShowCode(!showCode)}>
          <CodeIcon />
        </IconButton>
      </div>
      <div style={{marginBottom: "40px"}}>
        {showCode && (
          <pre
            style={{
              backgroundColor: "black",
              padding: "12px 18px",
              margin: "20px 0 0 0",
            }}
          >
            <code
              style={{
                backgroundColor: "black",
                color: "white",
                fontFamily:
                  'Consolas, "Liberation Mono", Menlo, Courier, monospace',
                fontSize: "14px",
              }}
            >
              {codeString}
            </code>
          </pre>
        )}
      </div>
    </div>
  )
}

const codeString = `import React from "react"
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
      <Typography paragraph><bold>Local Time:</bold> {time}</Typography>
    </div>
  )
}`
