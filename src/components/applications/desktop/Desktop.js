import React from 'react'
import PageHeader from './SiteHeader'
import DesktopIcons from './DesktopIconContainer'
import AppContainer from '../layout/AppContainer'
import TerminalView from '../terminal/TerminalView'
import FileExplorer from '../file-viewer/FileExplorer'
import { v4 as uuidv4 } from 'uuid'
import BackGround from '../../../img/statue-1594091269482-1978.jpg'
import '../../../css/main.css'

export default class Desktop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      terminal: this.generateTerminalApp(),
      fileExplorer: this.generateFolderApp(),
    }
    this.generateFolderApp.bind(this)
    this.generateTerminalApp.bind(this)
  }

  generateFolderApp = () => {
    return (
      <AppContainer
        appName="applications"
        appContent={<FileExplorer />}
        footerChunks={[
          '/pihole 837215 bytes',
          '50 file(s) found (812753 bytes)',
          'scan complete',
        ]}
        closeApp={this.closeApp.bind(this)}
        key={uuidv4()}
      />
    )
  }

  generateTerminalApp = () => {
    return (
      <AppContainer
        appName="terminal"
        appContent={<TerminalView />}
        footerChunks={['administrator', 'size: 400 x 600']}
        closeApp={this.closeApp.bind(this)}
        key={uuidv4()}
      />
    )
  }

  closeApp(e) {
    if (e.currentTarget.id === 'applications') {
      this.setState({ fileExplorer: null })
    } else if (e.currentTarget.id === 'terminal') {
      this.setState({ terminal: null })
    }
  }

  spawnNewApp(e) {
    if (e.currentTarget.id === '1') {
      this.setState({
        terminal: this.generateTerminalApp(),
      })
    } else {
      this.setState({
        fileExplorer: this.generateFolderApp(),
      })
    }
  }

  render() {
    return (
      <div className="application-container">
        <img src={BackGround} alt="bg" />
        <PageHeader />
        <main>
          <DesktopIcons iconClicked={this.spawnNewApp.bind(this)} />
          {[this.state.terminal, this.state.fileExplorer].map(
            (app) => {
              return app
            }
          )}
        </main>
      </div>
    )
  }
}
