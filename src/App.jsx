
class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state  ={
      press:null
    }
  }


  handleClick = (event) => {
    const press = event.target;
    this.setState({press})
  }

  render () {
    const {press} = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>
          Ciao 
        </button>

        <button onClick={this.handleClick}>
          Sono
        </button>

        <button onClick={this.handleClick}>
          Davide
        </button>

        <h1> {press} </h1>
      </div>
    )
  }
}