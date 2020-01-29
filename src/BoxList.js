import React, { Component } from 'react';
// import Box from './Box';
import NewBoxForm from './NewBoxForm';

export class BoxList extends Component {
  constructor(props) {
    super(props);
    // default fullName is an empty string
    this.state = {
      boxlist: [
        {
          Height: 0,
          Width: 0,
          color: ''
        }
      ]
    };
    this.addBoxlist = this.addBoxlist.bind(this);
  }
  // //   handleChange(evt) {
  //     this.setState({
  //       [evt.target.name]: evt.target.value
  //     });
  //   }
  addBoxlist(list) {
    this.setState(lst => ({
      boxlist: [...lst.boxlist, list]
    }));
  }

  render() {
    return (
      <div>
        <h1>BoxList</h1>
        <form>
          <label htmlFor="Height">Height:-</label>
          <input name="Height" value={this.state.Height} onChange={this.handleChange} />
          <br />
          <label htmlFor="Width">Width:- </label>
          <input name="Width" value={this.state.Width} onChange={this.handleChange} />
          <br />
          <label htmlFor="Color">Color :- </label>
          <input name="Color" value={this.state.color} onChange={this.handleChange} />
          <br />
        </form>
        {/* <Box /> */}
      </div>
    );
  }
}

export default BoxList;
