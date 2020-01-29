import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
// import uuid from 'uuid/v4';

export class BoxList extends Component {
  constructor(props) {
    super(props);
    // default fullName is an empty string
    this.state = {
      boxlist: []
    };
    this.addBoxlist = this.addBoxlist.bind(this);
  }
  addBoxlist(list) {
    this.setState(lst => ({
      boxlist: [...lst.boxlist, list]
    }));
  }
  // deleteBox(id) {
  //   this.setState(idno=>({
  //     boxlist: idno.id ===id ? remove
  //   }))
  // }

  renderBox(boxitem) {
    return (
      <div key="alpha">
        {this.state.boxlist.map((item, i) => (
          <Box id={i} height={`${item.Height}px`} width={`${item.Width}px`} bgc={item.color} />
        ))}
      </div>
    );
  }

  render() {
    console.log(this.state.boxlist);
    return (
      <div key="beta">
        <h1>BoxList</h1>
        <NewBoxForm addBox={this.addBoxlist} />
        {this.renderBox()}
      </div>
    );
  }
}

export default BoxList;
