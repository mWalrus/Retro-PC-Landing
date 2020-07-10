import React from 'react'
import Dir from './Dir'
import fetch from 'node-fetch'

export default class FileExplorer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dirs: [],
    }
  }

  componentDidMount() {
    this.getDirs()
  }

  async getDirs() {
    const req = await fetch('http://85.229.117.218:3001/apps')
    const res = await req.json()
    var dirs = []
    for (let dir of res.dirs) {
      dirs.push(<Dir name={dir} />)
    }
    this.setState({ dirs })
  }

  render() {
    return (
      <div className="file-explorer">
        <div className="file-tree">
          <span className="root">/pihole</span>
          <div className="dirs">
            {this.state.dirs.map((dir) => {
              return dir
            })}
          </div>
        </div>
        <div className="folder-view">
          <div className="dirs">{this.state.dirs}</div>
        </div>
      </div>
    )
  }
}
