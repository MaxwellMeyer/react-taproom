import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  let pintsAvailable =
    props.pints > 0 ? props.pints : "Out of Stock, try again next week!!";

  return (
    <>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>
          {props.brand} - {props.name}
        </h3>
        <p>
          <em>{props.price}</em>
        </p>
        <p>
          <em>{props.abv}% ABV</em>
        </p>
        <p>
          <em>{pintsAvailable}pints of this Flavor Available!</em>
        </p>
        <button onClick={() => props.onClickSellPint(props.id)}>
          Sell a Pint!
        </button>
        <hr />
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickSellPint: PropTypes.func,
};

export default Keg;
