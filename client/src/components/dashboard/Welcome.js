import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';

class Welcome extends Component {
    
  render() {
    const { user, loading } = this.props.auth;

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
      <div className="welcome">
        <div className="container">
          <div className="row1">{chatroom}</div>
          </div>

        
          </div>
    );
  }
}

Welcome.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

  auth: state.auth
});

export default connect(mapStateToProps)(
  Welcome
);
