import React from 'react'
import './App.css'

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1
    }
  }
  add() {
    this.setState({
      number: this.state.number + 1
    })
  }
  render() {
    return (
      <div className="red">
        <span>{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <strong>{this.props.name}</strong>
      </div>
    )
  }
}

function App(props) {
  return (
    <div className="App">
      name is {props.name}
      <Box name="box is god" />
    </div>
  )
}

export default App
