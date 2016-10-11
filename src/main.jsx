import React from 'react'
import ReactDOM from 'react-dom'
import MeetupTracker from './app/meetup-tracker'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

ReactDOM.render(
    <MeetupTracker />,
    document.getElementById('AppHost'))
