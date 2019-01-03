import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { setFlats } from '../actions';
import { connect } from 'react-redux';

import Flat from './flat';

class FlatList extends Component {

  // This triggers the setFlats action using a react lifecycle function
  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="col-xs-7 flat-list">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlatList);