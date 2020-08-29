import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    // <div className="row">
    //   <div className="container">
    //     <div className="site-header col-md-12">
    //       <h1>Markdown Previewer</h1>
    //     </div>
    //     <div className="editor-container col-md-6">ss</div>
    //     <div className="previewer-container col-md-6">ss</div>
    //   </div>
    // </div>

    <div className="container">
      <div className="site-header">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="row">
        <div className="col-sm-12 mb-2">
          <div className="card editor-container">
            <div className="card-body">
              <h5 className="card-title">Editor</h5>
              <textarea id="editor"></textarea>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="card previewer-container">
            <div className="card-body">
              <h5 className="card-title">Previewer</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
