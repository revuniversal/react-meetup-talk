import React from 'react'

const MeetupList = ({meetups}) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Date</th>
        <th>Location</th>
      </tr>
    </thead>
    
    <tbody>
      { 
        meetups.map(x => (
          <tr key={x.id}>
            <td>{x.date}</td>
            <td>{x.location}</td>
          </tr>
        ))
      }
      
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