import React, { Component } from 'react';
import Counters from './components/counters'
import './App.css';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(e => e.id !== counterID);
    // this.setState({counters: counters}); Because the 2 names are the same it can be simplified to:
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(e => {
      e.value = 0;
      return e;
    })
    this.setState({ counters });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(e => e.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
