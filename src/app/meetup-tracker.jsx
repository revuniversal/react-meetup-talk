import React, {Component} from 'react'
import MeetupList from './meetup-list'
import AddMeetup from './add-meetup'
import Footer from './footer'

class MeetupTracker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      meetups: [],
      nextId: 1
    }

    this.addMeetup = this.addMeetup.bind(this)
  }

  addMeetup(event) {
    const form = event.target
    const meetup = {
      id: this.state.nextId++,
      date: form.date.value,
      location: form.location.value
    }
    
    this.setState({ 
      meetups: [...this.state.meetups, meetup] 
    })

    event.preventDefault()
    form.date.value = ''
    form.location.value = ''
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header">Meetup Tracker</h1>
        
        <h3>Add a Meetup</h3>
        <AddMeetup onSubmit={this.addMeetup}/>
        
        <h3 style={{marginTop: '54px'}}>Meetups</h3>
        <MeetupList meetups={this.state.meetups}/>
        
        <Footer meetups={this.state.meetups} />
      </div>
    )
  }
}

export default MeetupTracker