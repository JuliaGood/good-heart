import "./popupClose.css";
import sprite from "../../assets/svg/sprite.svg";

function PopupClose( { closePopup } ) {
  return (
    <div className="popup-close"
      onClick={() => closePopup()}
    >
      <svg>
        <use xlinkHref={`${sprite}#close-popup-icon`} alt=""></use>
      </svg>
    </div>
  )
}

export default PopupClose;
