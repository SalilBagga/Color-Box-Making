import React, { Component } from 'react';
export class Box extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   height: 100,
  //   //   width: 200,
  //   //   bg: 'blue'
  //   // };
  // }
  blabla() {
    // console.log(this.props.id);
    // console.log(this.props.height);
    // let t = this.props.id;
    console.log('fghjklkjhbvc');
  }
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
          <button className="deletebutton" onClick={this.blabla}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Box;
