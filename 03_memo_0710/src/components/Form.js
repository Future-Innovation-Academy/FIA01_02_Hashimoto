import React from "react";
import { render } from "react-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };
  }

  render() {
    return (
      <div>
        <h2>入力欄</h2>
        <form onSubmit={this.hamdleSubmit}>
          <input value={this.state.content} onChange={this.handleChange} />
          <input type="submit" value="追加" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const content = event.target.value;
    this.setState({ content: content });
  };

  hamdleSubmit = event => {
    event.preventDefault();
    this.props.addMemo(this.state.content);
    this.setState({ content: "" });
  };
}

export default Form;