var FishTable = (props) => (
  <table>
    <tr>

    {props.Fish.map(singleFish =>
      <FishData singleFish={singleFish} />
    )}
       
    </tr>
  </table>
);

  window.FishTable = FishTable;

// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.






