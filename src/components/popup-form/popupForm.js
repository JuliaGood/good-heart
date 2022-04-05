import React, { Component } from "react";
import "./popupForm.css";
import PopupClose from "../popup-close-btn/popupClose";
import PersonSelection from "../person-selection/personSelection";
import IndividualPersonForm from "../individual-person-form/individualPersonForm";
import LegalPersonForm from "../legal-person-form/legalPersonForm";
import HelpOptions from "../help-options/helpOptions"; 
import MakeHelp from "../make-help/makeHelp";
import FinancialHelp from "../financial-help/financialHelp";
import MaterialHelp from "../material-help/materialHelp";
import VoluntaryHelp from "../voluntary-help/voluntaryHelp";
import PrimaryBtn from "../primary-btn/primaryBtn";

const initialPersonState = {
  firstname: {
    value: "",
    required: true,
    valid: null,
  },
  lastname: {
    value: "",
    required: true,
    valid: null,
  },
  companyname: {
    value: "",
    required: true,
    valid: null,
  },
  email: {
    value: "",
    required: true,
    valid: null,
  },
  phone: {
    value: "",
    required: true,
    valid: null,
  },
  country: {
    value: "",
    required: true,
    valid: null,
  },
  city: {
    value: "",
    required: true,
    valid: null,
  },
  district: {
    value: "",
    required: true,
    valid: null,
  },
  address: {
    value: "",
    required: true,
    valid: null,
  },
  postcode: {
    value: "",
    required: true,
    valid: null,
  }
}

class PopupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personTypes: ["Фіз.особа", "Юр.особа"],
      activePerson: 0,
      inputs: initialPersonState, //ind.person Form
      helpOptions: [
        {helpText: "Зробити", helpIcon: "hand-icon"},
        {helpText: "Фінансова допомога", helpIcon: "wallet-icon"},
        {helpText: "Матеріальна допомога", helpIcon: "clothes-icon"},
        {helpText: "Волонтерство", helpIcon: "heart-icon"}  
      ],
      activeOption: 1,
      paymentMethods: [ // for activeOption 1 (Financial Option)
        {methodText: "Карта Visa/MasterCard", methodIcon: "mastercard-icon"}, //+visa-icon
        {methodText: "Приват24", methodIcon: "privat24"},
        {methodText: "Термінали України", methodIcon: "terminal-icon"},
        {methodText: "WebMoney", methodIcon: "webmoney-icon1"},
        {methodText: "PayPal", methodIcon: "paypal-icon"}  
      ],
      activeMethod: 0,

      creditCard: { //for paymentCreditCard
        cardNumber1 : '',
        cardNumber2 : '',
        cardNumber3 : '',
        cardNumber4 : '',
        cardExpirationDate: '',
        cardCvv: ''
      },

      primaryBtnText: "Допомогти",
      isDisabled: false,
    };
  }

  helpOptionClick = (optionIndex) => {
    this.setState({
      activeOption: optionIndex
    })
  }

  displayHelpContent = () => {
    switch(this.state.activeOption) {
      case 0: return <MakeHelp />;
      case 1: return <FinancialHelp 
                        paymentMethods={this.state.paymentMethods} 
                        activeMethod={this.state.activeMethod}
                        financialHelpClick={this.financialHelpClick}
                        creditCard={this.state.creditCard}
                        onInputCardChange={this.onInputCardChange}
                        onInputCardKeyUp={this.onInputCardKeyUp}
                      />;
      case 2: return <MaterialHelp />;
      case 3: return <VoluntaryHelp />;
      default: return <div>Not found!</div>
    }
  }

  financialHelpClick = (methodIndex) => {
    this.setState({
      activeMethod: methodIndex
    })
  }

  personTypeClick = (personIndex) => {
    this.setState({
      activePerson: personIndex
    })
  }


  //indiv.person Form
  onInputChange = (event) => {
    //const { name, value } = event.target;
    console.log(event);
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState((prevState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [inputName]: { ...prevState.inputs[inputName], value: inputValue }
        }
      };
    },
    () => {
      this.validateInput(inputName, this.state.inputs[inputName]);
    });
  };

  validateAllInputs = (inputs) => { // before submitting the Form
    for (let inputName in inputs) {
      this.validateInput(inputName, inputs[inputName]);
    }
  };

  validateInput = (inputName, inputProperties) => { 
      this.setState((prevState) => ({
        inputs: {
          ...prevState.inputs,
          [inputName]: {
            ...prevState.inputs[inputName],
            valid: this.isInputValid(inputName, inputProperties)
          }
        }
      }));
  }

  isInputValid = (inputName, inputProperties) => {
    const { value, required } = inputProperties;
    if (!required && value.length === 0) {
      return true;
    }

    switch (inputName) {
      case 'firstname': 
      case 'lastname': 
      case 'companyname':
      case 'country': 
      case 'city': 
      case 'district': 
      case 'address':
        return this.isNameValid(value);
      case 'email':
        return this.isEmailValid(value);
      case 'phone':
        return this.isPhoneValid(value); 
      case 'postcode':
        return this.isPostcodeValid(value);
      default:
        return false;
    }
  };

  isNameValid = (name) => {
    return name.length >= 2 && name.length <= 30;
  };

  isPostcodeValid = (postcode) => {
    return postcode.length >= 2 && postcode.length <= 7;
  };
  
  isEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  isPhoneValid = (phone) => {
    const re = /^[0-9+-\s]+$/g;
    return re.test(String(phone).toLowerCase()) && phone.length >= 10 && phone.length <= 25;
  };

  // PaymentCreditCard inputs
  onInputCardChange =(event) => {
    console.log(event);
    let inputName = event.target.name;
    let inputValue = event.target.value;
    const nextInput = event.target.nextSibling;

    if (event.target.classList.contains('card-number')) {
      if (inputValue.length > 3) {
        if (!nextInput) return;

        nextInput.focus();
        inputName = nextInput.name;
        inputValue = inputValue.charAt(inputValue.length - 1);
      }
    }

    if (inputName === "cardExpirationDate" && inputValue.length > 4) {
      return;
    } 

    if (inputName === "cardCvv" && inputValue.length > 3) {
      return;
    }

    this.setState((prevState) => {
      return {
        creditCard: {
          ...prevState.creditCard,
          [inputName]:  inputValue
        }
      };
    });
  }
  onInputCardKeyUp = (event) => {
    if (event.keyCode === 8) {
      if (event.target.value.length === 0 && event.target.previousSibling) {
        event.target.previousSibling.focus();
      }
    }
  }

  onFormSubmit = async () => {
    await this.validateAllInputs(this.state.inputs);
    
    if (!this.hasErrors(this.state.inputs)) {
      this.setState({ isDisabled: true });
      alert("Form is submitted!");
      this.resetForm();
    } else {
      alert("Inputs are not valid");
    }
  }

  resetForm = () => {
    this.setState({ inputs: initialPersonState, isDisabled: false });
  }

  hasErrors = (inputs) => {
    return Object.keys(inputs)
      .some((inputName) => !inputs[inputName].valid);

    // for (let inputName in inputs) {
    //   if (!inputs[inputName].valid) {
    //     return true;
    //   }
    // }
    // return false;
  };

  render() {
    return (
      <div className="popup">
        <PopupClose closePopup={this.props.closePopup}/>
        <div className="popup-container">
          <h2>Заповніть форму</h2>
          <PersonSelection 
            personTypes={this.state.personTypes}
            activePerson={this.state.activePerson}
            personTypeClick={this.personTypeClick}
          />
          {
            this.state.activePerson === 0 
            ? <IndividualPersonForm 
                inputs={this.state.inputs}
                onInputChange={this.onInputChange}
              /> 
            : <LegalPersonForm />
          }
          <h2>Види допомоги</h2>
          <p className="help-subtitle">Ви можете змінити вид допомоги</p>

          <HelpOptions 
            helpOptions={this.state.helpOptions}
            activeOption={this.state.activeOption}
            helpOptionClick={this.helpOptionClick}
          />
          <div className="help-content">
            { 
              this.displayHelpContent()
            }
          </div>
          
          <PrimaryBtn 
            primaryBtnText={this.state.primaryBtnText} 
            buttonClick={this.onFormSubmit}
            disabled={this.state.isDisabled}
          />
        </div>
      </div>
    );
  }
}

export default PopupForm;
