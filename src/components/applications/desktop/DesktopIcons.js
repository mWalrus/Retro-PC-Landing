import React from 'react'
import Icon from './Icon'
import FolderIcon from '../../../img/directory_closed-4.png'
import TerminalIcon from '../../../img/console_prompt-0.png'

export default class DesktopIcons extends React.Component {
  render() {
    return (
      <div className="desktop-icons">
        <Icon
          icon={FolderIcon}
          appName="applications"
          iconClicked={this.props.iconClicked}
          id="0"
        />
        <Icon
          icon={TerminalIcon}
          appName="terminal"
          id="1"
          iconClicked={this.props.iconClicked}
        />
      </div>
    )
  }
}
