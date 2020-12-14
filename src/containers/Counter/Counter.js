import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(strResult => (
                    <li key={strResult.id} onClick={this.props.onDeleteResult}>{strResult.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      ctr: state.counter,
      storedResults: state.results
    };
}

const mapDispatchToProps = dispatch  => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 5}),
        onSubtract: () => dispatch({type: 'SUBTRACT', val: 5}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);