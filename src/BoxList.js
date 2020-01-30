import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

export class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxlist: []
    };
    this.addBoxlist = this.addBoxlist.bind(this);
  }
  removebox(id) {
    this.setState({
      boxlist: this.state.boxlist.filter(box => box.id !== id)
    });
  }
  addBoxlist(list) {
    this.setState(lst => ({
      boxlist: [...lst.boxlist, list]
    }));
  }
  renderBox(boxitem) {
    return (
      <div>
        {this.state.boxlist.map(item => (
          <Box
            key={item.id}
            id={item.id}
            height={`${item.Height}px`}
            width={`${item.Width}px`}
            bgc={item.color}
            removeBox={() => this.removebox(item.id)}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>BoxList</h1>
        <NewBoxForm addBox={this.addBoxlist} />
        {this.renderBox()}
      </div>
    );
  }
}

export default BoxList;
