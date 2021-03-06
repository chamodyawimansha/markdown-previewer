import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import marked from "marked";
import text from "./defaultText";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: text,
      output: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    marked.setOptions({
      breaks: true,
    });
    this.setState({
      output: marked(this.state.value),
    });
  }

  handleChange(event) {
    // set marked js options
    marked.setOptions({
      breaks: true,
    });
    this.setState({
      value: event.target.value,
      output: marked(event.target.value),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="site-header">
          <h1>Markdown Previewer</h1>
        </div>
        <div className="row">
          <div className="col-sm-12 mb-2">
            <div className="card editor-container">
              <div className="card-body">
                <h5 className="card-title">Editor</h5>
                <textarea
                  id="editor"
                  value={this.state.value}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card previewer-container">
              <div className="card-body">
                <h5 className="card-title">Previewer</h5>
                <div
                  id="preview"
                  dangerouslySetInnerHTML={{ __html: this.state.output }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
