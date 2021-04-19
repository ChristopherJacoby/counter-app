import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // }; this is removed to make it a controlled component for single source of truth.

  // This is one way to return conditional rendering (move the rest here and call this method).
  // The other way is being used in the render method.

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags.</p>;
  // }

  //We want to remove the local state in this component to allow for a single source of truth.
  //This will allow for the local state to update with the parent's state. (reset as example).
  //This will make this a controlled component (being entirely controlled by parent).

  render() {
    return (
      <React.Fragment>
        {/* The buttons are handling events */}
        {/* <button className="btn btn-secondary btn-sm" onClick={this.decreaseBtn}>
          - button was changed for single source of truth
        </button> */}
        <button className="btn btn-secondary btn-sm" onClick={() => this.props.onDecrement(this.props.counter)}>
          -
        </button>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>
          +
        </button>
        {/* <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button> */}
        {/* becasue we changed the parent to pass the entire object we can no longer pass things with this.props.id, but instead using counter. */}
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // increaseBtn = () => this.setState({ value: this.state.value + 1 });
  // decreaseBtn = () => this.setState({ value: this.state.value - 1 });
  //Becasue this became a controlled component for single source of truth, we can no longer use this.state.
}

export default Counter;
