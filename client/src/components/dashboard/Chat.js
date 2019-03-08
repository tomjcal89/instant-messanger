import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
// import Spinner from '../common/Spinner';

class Chat extends Component {
  componentDidMount() {
    // this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    let chatroom;

    return (
      <div className="Chat">
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
          </div>
        </div>
      </div>

    );
  }
}

Chat.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(
  Chat
);
