import { Component } from "react";

export default class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    const { message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={message} onChange={this.handleChange}></textarea>
        <button type="submit">Add</button>
      </form>
    );
  }
}
