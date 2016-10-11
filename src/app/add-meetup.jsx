import React from 'react'

const AddMeetup = ({onSubmit}) => (
  <form onSubmit={onSubmit} action="#" method="post">
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