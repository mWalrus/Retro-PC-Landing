import React from 'react'
import Draggable from 'react-draggable'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      app: this.getApp(),
    }
    this.close.bind(this)
  }

  setIndex(e) {
    var current = e.target.parentNode.parentNode.classList.contains(
      'container'
    )
      ? e.target.parentNode.parentNode
      : e.target.parentNode
    for (let app of document.querySelectorAll('.container')) {
      app !== current
        ? (app.style.zIndex = 1)
        : (app.style.zIndex = 2)
    }
  }

  getApp() {
    return (
      <Draggable
        handle=".app-header"
        stack=".container"
        onMouseDown={this.setIndex}
      >
        <div className={'container ' + this.props.appName}>
          <AppHeader
            title={this.props.title}
            closeApp={this.close.bind(this)}
          />
          <div className="window">{this.props.appContent}</div>
          <AppFooter chunks={this.props.footerChunks} />
        </div>
      </Draggable>
    )
  }

  close() {
    this.setState({ app: null })
  }

  render() {
    return this.state.app
  }
}
