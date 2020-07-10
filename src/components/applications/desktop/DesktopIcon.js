import React from 'react'

export default class Icon extends React.Component {
  render() {
    return (
      <div
        className="desktop-icon"
        id={this.props.id}
        onClick={(e) => {
          this.props.iconClicked(e)
        }}
      >
        <img src={this.props.icon} alt="icon" />
        <span className="icon-label">{this.props.appName}</span>
      </div>
    )
  }
}
