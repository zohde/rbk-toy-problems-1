var FishTable = (fishData) => (
  <table>
    <tbody>
 <div className="Fish">
    {
    fishData.map(fish=>
     (<FishTableRow fish={fish} />))

}
  </div>
    
    </tbody>
  </table>
);

// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.FishTable = FishTable;




// <FishTableRow props.fishData[0] />
//       <FishTableRow props.fishData[1] />
//       <FishTableRow props.fishData[2]/>