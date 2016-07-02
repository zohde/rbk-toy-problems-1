class FishTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <tr onClick={() => this.setState({clicked: !this.state.clicked})}>
        <td className="fish-name">{this.props.singleFish.name}</td>
        <td classNmae="fish-image">{this.props.singleFish.image}</td>
        {this.state.clicked ? <td className="fish-description">{this.props.singleFish.description}</td> : null}
      </tr>
    )
  }
}



// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.FishTableRow = FishTableRow;
