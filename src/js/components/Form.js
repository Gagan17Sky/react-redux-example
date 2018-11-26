import React, {Component} from 'react';

import {connect} from 'react-redux';
import {fetchData} from '../actions/index'

class ConnectedForm extends Component {
  render(){
    const {title} = this.state;

    return (
      <form onSubmit={() => props.fetchData()}>
        <div className='form-group'>
          <label htmlFor="title">Click to load Persons info</label>Load
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          Load
        </button>
      </form>
    );
  }
}

function mapStateToProps (state){
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm)

export default Form;
