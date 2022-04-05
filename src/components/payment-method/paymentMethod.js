import "./paymentMethod.css";
import sprite from "../../assets/svg/sprite.svg";

function PaymentMethod({ methodIndex, methodIcon, methodText, isActive, financialHelpClick }) {
  return (
    <div className="payment-method">
      <div className={`payment-method-box ${isActive ? "active" : ""}`}
        onClick={() => financialHelpClick(methodIndex)}
      >
        <div className="payment-method-icon">
          <svg>
            <use xlinkHref={`${sprite}#${methodIcon}`} alt={methodText}></use>
          </svg>
        </div>
        <div className="payment-method-text">{methodText}</div>
      </div>

    </div>
  )
}

export default PaymentMethod;
