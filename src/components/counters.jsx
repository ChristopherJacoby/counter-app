import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {

        const { onReset, onIncrement, counters, onDecrement, onDelete } = this.props;
        return (
            <React.Fragment>
                {/* Instead of creating multiple counters we can create an array of them in state. */}
                {/* <Counter />;
                <Counter />;
                <Counter />;
                <Counter />; */}
                <button
                    className="btn btn-success btn-sm m-4"
                    onClick={onReset}>
                    Reset
                </button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        // value={counter.value}
                        // selected={true}
                        // id={counter.id} instead of passing these 3 plus anymore that will eist in future, we can pass entire object:
                        counter={counter}
                    />)}
            </React.Fragment>
        );
    }
}

export default Counters;