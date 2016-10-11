import React from 'react'

function onSubmit(callback) {
  return (event) => {
    const form = event.target;
    const meetup = {
      date: form.date.value,
      location: form.location.value
    }

    callback(meetup);

    event.preventDefault()
    form.date.value = ''
    form.location.value = ''
  }
}

const AddMeetup = ({callback}) => (
  <form onSubmit={onSubmit(callback)} action="#" method="post">
    <div className="row">
      <div className="col-sm-6">
        <input
          type="date" 
          className="form-control" 
          name="date" 
          placeholder="when is the meetup"
          required 
        />
      </div>
      
      <div className="col-sm-6">
        <input 
          type="text" 
          className="form-control" 
          name="location" 
          placeholder="where is the meetup"
          required 
        />
      </div>
    </div>
  </form>
)

export default AddMeetup