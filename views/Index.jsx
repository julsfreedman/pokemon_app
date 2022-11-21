const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((pm, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${i}`}>
                  {pm.name.charAt(0).toUpperCase() +
                    pm.name.slice(1).toLowerCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
