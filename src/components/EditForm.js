import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditForm(props) {
  const { keg } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      id: keg.id,
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="EDIT Keg Details"
      />
    </>
  );
}

EditForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func,
};

export default EditForm;
