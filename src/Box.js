import React, { Component } from 'react';
export class Box extends Component {
  render() {
    return (
      <div>
        <div
          key={`${this.props.id}`}
          style={{
            height: this.props.height,
            width: this.props.width,
            backgroundColor: `${this.props.bgc}`
          }}
        >
          <button className="deletebutton" onClick={this.props.removeBox}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Box;
