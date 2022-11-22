const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page</h1>
        <nav>
          <a href="/pokemon">Back</a>
        </nav>
        <form action="/pokemon" method="POST">
          Name: {""} <input type="text" name="name" />
          <br />
          Image: <input type="url" name="img" />
          <br />
          <input type="submit" value="Create Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = New;
