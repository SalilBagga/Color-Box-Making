import React, { Component } from 'react';
export class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 100,
      width: 200,
      bg: 'blue'
    };
  }
  render() {
    let h = this.state.height;
    return (
      <div>
        <div
          style={{
            height: this.state.height,
            width: this.state.width,
            backgroundColor: `${this.state.bg}`
          }}
        >
          <button style={{ float: 'right' }}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Box;
