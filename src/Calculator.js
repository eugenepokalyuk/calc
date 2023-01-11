import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0
  }

  handleChange = (event, number) => {
    const value = parseInt(event.target.value, 10)
    
    if (number === 1) {
      this.setState({ num1: value })
    } else {
      this.setState({ num2: value })
    }
  }

  handleCalculation = (operator) => {
    let result = 0
    const { num1, num2 } = this.state
    switch(operator) {
      case 'add':
        result = num1 + num2
        break
      case 'subtract':
        result = num1 - num2
        break
      case 'multiply':
        result = num1 * num2
        break
      case 'divide':
        result = num1 / num2
        break
      default:
        break
    }
    this.setState({ result })
  }

  render() {
    const { num1, num2, result } = this.state
    return (
      <div>
        <input
          type="number"
          value={num1}
          onChange={e => this.handleChange(e, 1)}
        />
        <input
          type="number"
          value={num2}
          onChange={e => this.handleChange(e, 2)}
        />
        <br />
        <button onClick={() => this.handleCalculation('add')}>+</button>
        <button onClick={() => this.handleCalculation('subtract')}>-</button>
        <button onClick={() => this.handleCalculation('multiply')}>*</button>
        <button onClick={() => this.handleCalculation('divide')}>/</button>
        <br />
        <h1>Result: {result}</h1>
      </div>
    )
  }
}

export default Calculator