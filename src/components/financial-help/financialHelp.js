import React, { Component } from "react";
import "./financialHelp.css";
import PaymentMethods from "../payment-methods/paymentMethods";
import PaymentCreditCard from "../payment-credit-card/paymentCreditCard";
import PaymentAnotherCard from "../payment-another-card/paymentAnotherCard";

function FinancialHelp ({paymentMethods, activeMethod, financialHelpClick, creditCard, onInputCardChange, onInputCardKeyUp }) {
    return(
      <div className="financial-help">
      <div className="payment-box">
        <div className="payment-title" style={{ margin: 0 }}>
          Спосіб оплати
        </div>
        <PaymentMethods 
          paymentMethods={paymentMethods}
          activeMethod={activeMethod}
          financialHelpClick={financialHelpClick}
        />
      </div>
      <div className="payment-details">
        <div className="payment-details-box">
          <div className="payment-title">Введіть наступні данні</div>
          {
            activeMethod === 0 
            ? <PaymentCreditCard 
                creditCard={creditCard}
                onInputCardChange={onInputCardChange}
                onInputCardKeyUp={onInputCardKeyUp}
              /> 
            : <PaymentAnotherCard />
          }
        </div>
      </div>
    </div>
    )
}

export default FinancialHelp;
