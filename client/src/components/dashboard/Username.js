import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Welcome from './Welcome'
import Chat from './Chat'


export default class Username extends Component {
    render() {
        return (

            <div className ="row col-md-12">
                 <div className="row">
                <Welcome />
                </div>
                <div className="col-md-10">
                <Chat />
                </div>
                <div className="col-md-2">
                <Dashboard />
                </div>

            </div>


        )

    }
}
