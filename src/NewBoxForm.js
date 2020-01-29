import React, { Component } from 'react';
// import BoxList from './BoxList';
// import Box from './Box';

export class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Height: '', Width: '', color: '' };
    // this.addBoxlist = this.addBoxlist.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    // this.props.addBox(this.state);
    this.setState({ Height: '', Width: '', color: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Height">Height:-</label>
          <input name="Height" value={this.state.Height} onChange={this.handleChange} />
          <br />
          <label htmlFor="Width">Width:- </label>
          <input name="Width" value={this.state.Width} onChange={this.handleChange} />
          <br />
          <label htmlFor="color">Color :- </label>
          <input name="color" value={this.state.color} onChange={this.handleChange} />
          <br />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
