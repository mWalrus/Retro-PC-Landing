import React from 'react'
import Dir from './Dir'

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

  getDirs() {
    var dirs = []
    for (let i = 0; i < 50; i++) {
      dirs.push(<Dir name="folder" />)
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
