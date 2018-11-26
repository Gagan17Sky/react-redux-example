import React from 'react';
import { connect } from 'react-redux';

const ConnectedList = (props) => (
  <div>
    {
      props.appData.isFetching && <Text>Loading</Text>
    }
    {
      props.appData.data.length ? (
        props.appData.data.map((person, i) => {
          return <div key={i}>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          </div>
        })
      ) : null
    }
  </div>
);

function mapStateToProps (state){
  return {
    appData: state.appData
  }
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;
