import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'

export default function GithubContent() {
    return (
        <div>
            <GitHubCalendar username="tj3407" blockSize={20} fontSize={18} fullYear={false}>
                <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
        </div>
    )
}
