import React from 'react'

export default class AppFooter extends React.Component {
  render() {
    return (
      <footer>
        {this.props.chunks.map((chunk) => {
          return <span className="chunk">{chunk}</span>
        })}
      </footer>
    )
  }
}
