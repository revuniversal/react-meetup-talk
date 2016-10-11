import React from 'react'

function renderMeetups(meetups) {
  if (meetups.length) {
    return meetups.map(x => (
        <tr key={x.id}>
          <td>{x.date}</td>
          <td>{x.location}</td>
        </tr>
    ))
  } else {
    return (
      <tr>
        <td colSpan="2">
          There are no meetups registered yet.
        </td>
      </tr>
    )
  }
}

const MeetupList = ({meetups}) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Date</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {renderMeetups(meetups)}
    </tbody>
  </table>
)

export default MeetupList