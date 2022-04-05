import "./paymentMethods.css";
import PaymentMethod from "../payment-method/paymentMethod";

function PaymentMethods({ paymentMethods, activeMethod, financialHelpClick }) {
    return (
      <div className="payment-methods">
        {
          paymentMethods.map((method, index) => (
            <PaymentMethod 
              key={index}
              methodIndex={index}
              methodText={method.methodText}
              methodIcon={method.methodIcon}
              isActive={activeMethod === index}
              financialHelpClick={financialHelpClick}
            />
          )) 
        }
      </div>
    )
}

export default PaymentMethods;
