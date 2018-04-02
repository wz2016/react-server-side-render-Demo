import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
    // componentDidMount() {
    //     this.props.fetchUsers();
    // }
    renderUsers() {
      console.log('this.props.users: ', this.props.users);
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });
    }
    render() {
        return (
            <div>
                Here is big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
  // console.log('state: ', state);
    return { users: state.users };
}

// loading data entry
function loadData(store) {
    // console.log('I am trying to load some data');
    return store.dispatch(fetchUsers())
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);

export { loadData };
