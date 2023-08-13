import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    // React Batch updating -> increment 3
    // this.setState(prevState => ({count: prevState.count + 1}))
    // this.setState(prevState => ({count: prevState.count + 1}))
    // this.setState(prevState => ({count: prevState.count + 1}))
    // what happen using object syntax - increment only 1
    // setState() method is asynchronous - this.state.count is same for every state
    this.setState({count: this.state.count + 1})
    this.setState({count: this.state.count + 1})
    this.setState({count: this.state.count + 1})
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    console.log('render() called')
    const {count} = this.state
    return (
      <div className="counter-container">
        <p className="count">Count {count}</p>
        <div>
          <button className="increase-button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="decrease-button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
