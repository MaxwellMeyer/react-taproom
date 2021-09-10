/* eslint-disable */
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
      kegList: [],
      selectedKeg: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleAddNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      kegList: newKegList,
      formVisibleOnPage: false,
    });
  };

  handleChangeSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter((keg) => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleDeleteKeg = (id) => {
    const newKegList = this.state.kegList.filter((keg) => keg.id !== id);
    this.setState({
      kegList: newKegList,
      selectedKeg: null,
    });
  };

  handleEditKegInList = (kegToEdit) => {
    const editedKegList = this.state.kegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      kegList: editedKegList,
      editing: false,
      selectedKeg: null,
    });
  };

  handleSellPint = (id) => {
    const selectedKeg = this.state.kegList.filter((keg) => keg.id === id)[0];
    if (selectedKeg.pints >= 1) {
      selectedKeg.pints--;
      this.setState({
        kegList: this.state.kegList,
        editing: false,
        selectedKeg: null,
      });
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditKegInList}
        />
      );
      buttonText = "Return to Main Menu";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickDelete={this.handleDeleteKeg}
          onClickEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Main Menu";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewForm onNewKegCreation={this.handleAddNewKegToList} />
      );
      buttonText = "Return to Main Menu";
    } else {
      currentlyVisibleState = (
        <KegList
          keglist={this.state.kegList}
          onKegSelection={this.handleChangeSelectedKeg}
          onClickSellPint={this.handleSellPint}
        />
      );
      buttonText = "Add Keg";
    }

    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;
