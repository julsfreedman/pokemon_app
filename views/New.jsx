const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page</h1>
        <nav>
          <a href="/pokemon">Home Page</a>
        </nav>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Image:{" "}
          <input
            type="file"
            id="image-input"
            accept="image/jpeg, image/png, image/jpg"
          />
          <br />
          <input type="submit" value="Create Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = New;
