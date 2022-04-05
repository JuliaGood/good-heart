import React, { Component } from "react";
import InitialPage from "./components/initial-page/initialPage";
import PopupForm from './components/popup-form/popupForm';

class App extends Component {
  constructor() {
    super();
    this.state ={
      isPopupOpen: true,
    }
  }

  openPopup = () => {
    this.setState({ isPopupOpen: true })
  }

  closePopup = () => {
    this.setState({ isPopupOpen: false })
  }

  render() {
    return (
      <>
        { this.state.isPopupOpen 
          ? <PopupForm closePopup={this.closePopup} /> 
          : <InitialPage openPopup={this.openPopup} /> 
        }
      </>
    );
  }
}

export default App;
