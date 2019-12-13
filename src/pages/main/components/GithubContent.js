import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'

export default function GithubContent() {
    return (
        <div style={{border: "1px solid #c9c9c9", padding: "10px"}}>
            <GitHubCalendar username="tj3407" blockSize={20} fontSize={18} blockMargin={6} fullYear>
                <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
        </div>
    )
}
