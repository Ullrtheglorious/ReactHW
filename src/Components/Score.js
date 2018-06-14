import React, { Component } from 'react';

class Score extends Component {

    render() {
        return (
            <div>
                <center>
                    <h3>Score:{this.props.score}</h3>
                </center>
            </div>
        );
    };
};

export default Score;