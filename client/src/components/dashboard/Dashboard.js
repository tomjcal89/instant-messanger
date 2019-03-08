import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';

class Dashboard extends Component {
  componentDidMount() {
    // this.props.getCurrentProfile();
  }

  // onDeleteClick(e) {
  //   this.props.deleteAccount();
  // }

  render() {
    const { user, loading } = this.props.auth;

    let chatroom;

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row1">{chatroom}</div>
          </div>

            {/* user div starts here to list users */}
            <div className="col-md-2">
              <h1>Users</h1>
              <ul class="list-group">
                <div className="userDiv">
                  <li className="list-group">{user.username}
                  </li>
                  <hr />
                  <li className="list-group">{user.username}
                  </li>
                  <hr />
                  <li className="list-group">{user.username}
                  </li>
                  <hr />
                  <li className="list-group">{user.username}
                  </li>
                  <hr />
                  <li className="list-group">{user.username}
                  </li>
                  <hr />
                  <li className="list-group">{user.username}
                  </li>
                  <hr />
                  <li className="list-group">{user.username}
                  </li>
                  <hr />
                  <li className="list-group">{user.username}
                  </li>
                  <hr />
                  <li className="list-group">{user.username}
                  </li>
                  <hr />
                </div>
              </ul>
            </div>
          </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

  auth: state.auth
});

export default connect(mapStateToProps)(
  Dashboard
);
