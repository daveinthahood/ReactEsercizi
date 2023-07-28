import { useCallback, useState } from 'react'
import React from 'react'
import { CounterDisplay } from './CounterDisplay'



class Counter extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          count: 0,
          incrementAmount:1,
          incrementInverval:1000
      }
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }


  render() {
      return (
         <CounterDisplay counter = {this.state.count} />
          
      )

  }
}

export default Counter