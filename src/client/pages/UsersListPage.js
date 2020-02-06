import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

export class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App"></meta>
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}

        <h3>This is list of users!</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

function loadData(store) {
  // Promise
  return store.dispatch(fetchUsers());
}
export { loadData };

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};
