import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deletePearsonUser } from '../actions/index';

export class PearsonUser extends Component {

  handleDeleteUser = () => {
    this.props.deletePearsonUser(this.props.user.id);
  }

  render() {
    return (
      <div className="user-container">
        <div className="avatar">
          <img src={this.props.user.avatar} alt="Not found" />
        </div>
        <div className="main-container">
          <div className="user-name-container">
            <span>{this.props.user.first_name} {this.props.user.last_name}</span>
          </div>
          <div className="delete-user-link">
            <span onClick={this.handleDeleteUser}>Delete</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deletePearsonUser},dispatch);
}

export default connect(null,mapDispatchToProps)(PearsonUser);
