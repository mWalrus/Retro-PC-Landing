import React from 'react'

export default class PageHeader extends React.Component {
  render() {
    return (
      <header>
        <span className="logo">W</span>
        <span className="option">File</span>
        <span className="option">Edit</span>
        <span className="option">View</span>
        <span className="option">Help</span>
        <span className="date-time">Mon 02 Dec 2020, 08:23 PM</span>
      </header>
    )
  }
}
