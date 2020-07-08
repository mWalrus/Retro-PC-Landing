import React from 'react'
import PageHeader from '../../SiteHeader'
import DesktopIcons from './DesktopIcons'
import AppContainer from '../layout/AppContainer'
import TerminalView from '../terminal/TerminalView'
import FileExplorer from '../file-viewer/FileExplorer'
import BackGround from '../../../img/statue-1594091269482-1978.jpg'
import '../../../css/main.css'

export default class Desktop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentApps: [
        this.generateTerminalApp(),
        this.generateFolderApp(),
      ],
    }
  }

  generateFolderApp() {
    return (
      <AppContainer
        appName="applications"
        title="applications"
        appContent={<FileExplorer />}
        footerChunks={[
          '/pihole 837215 bytes',
          '50 file(s) found (812753 bytes)',
          'scan complete',
        ]}
      />
    )
  }

  generateTerminalApp() {
    return (
      <AppContainer
        appName="terminal"
        title="terminal"
        appContent={<TerminalView />}
        footerChunks={['administrator', 'size: 400 x 600']}
      />
    )
  }

  spawnNewApp(e) {
    if (e.currentTarget.id === '1') {
      this.setState({
        currentApps: [
          ...this.state.currentApps,
          this.generateTerminalApp(),
        ],
      })
    } else {
      this.setState({
        currentApps: [
          ...this.state.currentApps,
          this.generateFolderApp(),
        ],
      })
    }
  }

  render() {
    return (
      <div className="application">
        <img src={BackGround} alt="bg" />
        <PageHeader />
        <main>
          <DesktopIcons iconClicked={this.spawnNewApp.bind(this)} />
          {this.state.currentApps}
        </main>
      </div>
    )
  }
}
