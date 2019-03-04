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
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Chatroom</h1>
              {chatroom}
            </div>
          </div>
        </div>
      </div>
      
    ); 
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps)(
  Dashboard
);
