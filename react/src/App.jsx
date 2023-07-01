import { useCallback, useState } from 'react'
import React from 'react'



class Counter extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          count: 0,
          incrementAmount:1,
          incrementInverval:1000
      }
      setInterval(() => {
          this.setState((state) => {
              return {
                  count: this.state.count + this.state.incrementAmount,
              }
          })
      }, this.state.incrementInverval)
  }
  render() {
      return (
          <div>
              <h1>Counter: {this.state.count}</h1>
          </div>
      )

  }
}

export default Counter