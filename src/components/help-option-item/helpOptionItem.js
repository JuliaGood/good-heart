import "./helpOptionItem.css";
import sprite from "../../assets/svg/sprite.svg";

function HelpOptionItem({ optionIndex, helpIcon, helpText, isActive, helpOptionClick }) {
  return (
    <div className={`help-option-item ${ isActive ? "active" : ""}`}
      onClick={() => helpOptionClick(optionIndex)} 
    >
      <div className="help-icon">
        <svg>
          <use xlinkHref={`${sprite}#${helpIcon}`} alt={helpText}></use>
        </svg>
      </div>
      <div className="help-text">{helpText}</div>
    </div>
  )
}

export default HelpOptionItem;
