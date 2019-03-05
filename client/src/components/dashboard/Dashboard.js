import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';

class Dashboard extends Component {
  componentDidMount() {
    // this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user, loading } = this.props.auth;
    // const { profile, loading } = this.props.profile;

    let chatroom;

    if (user === null || loading) {
      chatroom = <Spinner />;
    } else {
      chatroom = (
        <div>
          <p className="lead text-muted">Welcome {user.name}!</p>
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row1">{chatroom}</div>

          {/* chatroom box and text input starts here */}
          <div className="row">
            <div className="col-md-10">
              <h1>Chatroom</h1>
              <div class="jumbotron col-10">
                <h3>Chat will take place in here</h3>
              </div>
              <div className="row">
              <div class="form-group col-8">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
              </div>
              <input class="btn btn-primary " type="submit" value="Submit"></input>
            </div>
            </div>
            
            {/* user div starts here to list users */}
            <div className="col-md-2">
              <h1>Users</h1>
              <ul class="list-group">
                <div className="userDiv">
                  <li className="list-group">{user.name}
                  </li>
                  <hr />
                  <li className="list-group">{user.name}
                  </li>
                  <hr />
                  <li className="list-group">{user.name}
                  </li>
                  <hr />
                  <li className="list-group">{user.name}
                  </li>
                  <hr />
                  <li className="list-group">{user.name}
                  </li>
                  <hr />
                  <li className="list-group">{user.name}
                  </li>
                  <hr />
                  <li className="list-group">{user.name}
                  </li>
                  <hr />
                  <li className="list-group">{user.name}
                  </li>
                  <hr />
                  <li className="list-group">{user.name}
                  </li>
                  <hr />
                </div>
              </ul>
            </div>
          </div>
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
