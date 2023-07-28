import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

    handleCounter = () => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1
      }))
    }




  render() {
    const {counter} = this.state
    return (
      <>
        questo è un counter : {counter}
        <button onClick={this.handleCounter}> + </button>
      </>
    )
  }
}