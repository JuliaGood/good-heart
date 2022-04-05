import React, { Component } from "react";
import "./initialPage.css";
import PrimaryBtn from "../primary-btn/primaryBtn";


class InitialPage extends Component {
  constructor() {
    super();
    this.state = {
      primaryBtnText: "Відкрити форму",
    }
  }

  render() {
    return (
      <div className="initial-page"
      >
        <PrimaryBtn primaryBtnText={this.state.primaryBtnText} 
         buttonClick={this.props.openPopup}
        />
      </div>
    )
  }
}

export default InitialPage;
