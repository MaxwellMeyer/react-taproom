import React from "react";
import NewForm from "./NewForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditForm from "./EditForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
    };

    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;
