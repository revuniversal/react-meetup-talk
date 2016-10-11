import React from 'react'

function renderMeetups(meetups) {
    return meetups.map(x => (
        <tr key={x.id}>
            <td>{x.date}</td>
            <td>{x.location}</td>
        </tr>
    ))
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
      {
        !meetups.length &&
        <tr>
          <td colSpan="2">
            There are no meetups registered yet.
          </td>
        </tr>
      }
    </tbody>
  </table>
)

export default MeetupList