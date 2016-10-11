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

  addMeetup(meetup) {
    meetup.id = this.state.nextId++;
    
    this.setState({ 
      meetups: [...this.state.meetups, meetup] 
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header">Meetup Tracker</h1>
        
        <h3>Add a Meetup</h3>
        <AddMeetup callback={this.addMeetup}/>
        
        <h3 style={{marginTop: '54px'}}>Meetups</h3>
        <MeetupList meetups={this.state.meetups}/>
        
        <Footer meetups={this.state.meetups} />
      </div>
    )
  }
}

export default MeetupTracker