import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickDelete } = props;

  return (
    <>
      <h1>Keg Details</h1>
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3>
      <h3>Price: {keg.price}$</h3>
      <h3>ABV: {keg.abv}</h3>
      <hr />

      <button onClick={() => onClickDelete(keg.id)}>DELETE this Keg</button>
      <button onClick={props.onClickEdit}>UPDATE Keg Details</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
};

export default KegDetail;
