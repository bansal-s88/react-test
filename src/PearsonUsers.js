import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUsersDataResults, addMorePearsonUsers } from './actions/index';

import PearsonUser from './components/PearsonUser';

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  componentWillMount() {
    this.props.fetchUsersDataResults(this.state.users);
  }

  addMoreUsers() {
    this.props.addMorePearsonUsers();
  }

  render() {
    let userData = this.props.userListData;
    let userList = userData.map((item,index) => {
      return <PearsonUser key={index} user={item} />;
    });
    return (
      <div className="pearon-users">
        <div className="heading-container">
          <h1>Pearson User Management</h1>
          <button onClick={this.addMoreUsers.bind(this)}>Add More Users</button>
        </div>
        <div className="user-list-container">
          {userList}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUsersDataResults, addMorePearsonUsers},dispatch);
}

function mapStateToProps(state){
  return {
    userListData: state.userListData
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PearsonUsers);
