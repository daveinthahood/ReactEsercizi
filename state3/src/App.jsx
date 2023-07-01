import { useCallback, useState } from 'react'
import React from 'react'
import { CounterDisplay } from './counterDisplay'



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
                  count: state.count + this.state.incrementAmount,
              }
          })
      }, this.state.incrementInverval)
  }
  render() {
      return (
         <CounterDisplay counter = {this.state.count} />
          
      )

  }
}

export default Counter