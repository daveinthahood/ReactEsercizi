import { useCallback, useState } from 'react'
import React from 'react'



class Counter extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          count: 0
      }
      setInterval(() => {
          this.setState((state) => {
              return {
                  count: state.count + 1,
              }
          })
      }, 1000)
  }
  render() {
      return (
          <div>
              <h1>Count: {this.state.count}</h1>
          </div>
      )

  }
}

export default Counter