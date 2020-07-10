import React from 'react'
import ScrollToBotton from 'react-scroll-to-bottom'
import fetch from 'node-fetch'

export default class TerminalView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      warning: null,
    }
  }

  async componentDidMount() {
    await this.setMsg(this.getLogo())
    await this.setMsg(await this.getHWInfo())
    await this.setMsg(await this.getPiHoleInfo())

    // const msgSplit = msg.split('\n')
  }

  async setMsg(lines) {
    for (let line of lines) {
      line = line.trim()
      for (let i = 0; i < line.length; i++) {
        this.setState({ msg: this.state.msg + line.charAt(i) })
        await this.sleep(2)
      }
      this.setState({ msg: this.state.msg + '\n' })
    }
  }

  async callAPI(url) {
    let req = await fetch(url)
    return await req.json()
  }

  getLogo() {
    return [
      ' ________  ___   __   __  _______  ___      _______ ',
      '|       ||   | |  | |  ||       ||   |    |    ___|',
      '|    _  ||   | |  |_|  ||       ||   |    |   |___',
      '|   |_| ||   | |       ||  |¯|  ||   |    |    ___|',
      '|    ___||   | |       ||  |_|  ||   |___ |   |___',
      '|   |    |   | |  |¯|  ||       ||       ||       |',
      '|___|    |___| |__| |__||_______||_______||_______|',
    ]
  }

  async getHWInfo() {
    const res = await this.callAPI(
      'http://85.229.117.218:3001/hwinfo'
    )
    return [
      '============== HW INFO ==============',
      'OS: ' + res.os,
      'CPU: ' + res.cpu,
      'RAM: ' + res.mem,
    ]
  }

  async getPiHoleInfo() {
    const res = await this.callAPI(
      'http://85.229.117.218:3001/pihole'
    )

    const result = [
      '========== PIHOLE VERSION ===========',
      'Current: ' + res.current,
      'Latest: ' + res.latest,
    ]

    if (res.current !== res.latest) {
      result.push(
        '[WARNING] version mismatch found!\nUpdate your system!'
      )
      this.setState({ warning: 'warning' })
    }

    return result
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  render() {
    return (
      <ScrollToBotton className="feed">
        <pre className={this.state.warning}>{this.state.msg}</pre>
      </ScrollToBotton>
    )
  }
}
