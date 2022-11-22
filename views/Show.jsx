const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>
          {pokemon.name.charAt(0).toUpperCase() +
            pokemon.name.slice(1).toLowerCase()}
        </h2>
        <img src={`${pokemon.img}.jpg`} />
        <br />
        <a href={"/pokemon"}>Back Home</a>
      </div>
    );
  }
}
module.exports = Show;
