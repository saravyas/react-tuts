import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>PostForm === Add POst</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              onChange={this.onChange}
              type="text"
              name="title"
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              onChange={this.onChange}
              name="body"
              value={this.state.body}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
