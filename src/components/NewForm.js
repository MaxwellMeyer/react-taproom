import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewForm(props) {
  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: 124,
      id: v4(),
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewFormSubmission}
        buttonText="Submit"
      />
    </>
  );
}

NewForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewForm;
