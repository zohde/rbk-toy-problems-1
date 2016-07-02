var FishTable = (props) => (
  <table>
    <tbody>
      {props.fishes.map((fishes,key) => <FishTableRow fish={fishes} key={key} />)}
    </tbody>
  </table>
);

window.FishTable = FishTable;
// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.

