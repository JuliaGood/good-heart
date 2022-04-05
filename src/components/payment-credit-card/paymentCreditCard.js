import "./paymentCreditCard.css";

function PaymentCreditCard({ creditCard, onInputCardChange, onInputCardKeyUp }) {
  return (
    <div className="payment-credit-card">
      <div className="card-number">
        <div className="card-text">Номер карти</div>
        <div className="card-number-inputs">
          <input
            className="card-input card-number"
            min="3"
            max="3"
            type="number"
            name="cardNumber1"
            value={creditCard.cardNumber1}
            autoComplete="off"
            onChange={onInputCardChange}
            onKeyUp={onInputCardKeyUp}
          />
          <input
            className="card-input card-number"
            min="3"
            max="3"
            type="number"
            name="cardNumber2"
            value={creditCard.cardNumber2}
            autoComplete="off"
            onChange={onInputCardChange}
            onKeyUp={onInputCardKeyUp}
          />
          <input
            className="card-input card-number"
            min="3"
            max="3"
            type="number"
            name="cardNumber3"
            value={creditCard.cardNumber3}
            autoComplete="off"
            onChange={onInputCardChange}
            onKeyUp={onInputCardKeyUp}
          />
          <input
            className="card-input card-number"
            min="3"
            max="3"
            type="number"
            name="cardNumber4"
            value={creditCard.cardNumber4}
            autoComplete="off"
            onChange={onInputCardChange}
            onKeyUp={onInputCardKeyUp}
          />
        </div>
      </div>
      <div className="card-secret">
        <div className="card-secret-column">
          <div className="card-text">Термін дії</div>
          <input
            className="card-input"
            type="text"
            name="cardExpirationDate"
            value={creditCard.cardExpirationDate}
            autoComplete="off"
            onChange={onInputCardChange}
          />
        </div>
        <div className="card-secret-column">
          <div className="card-text">CVC/CVV</div>
          <input 
            className="card-input" 
            type="text" 
            name="cardCvv" 
            value={creditCard.cardCvv}
            autoComplete="off"
            onChange={onInputCardChange}
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentCreditCard;
