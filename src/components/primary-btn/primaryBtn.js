import "./primaryBtn.css";

function PrimaryBtn({ primaryBtnText, buttonClick, disabled }) {
  return (
    <button
      type="button"
      className="submit-btn"
      onClick={() => buttonClick()}
      disabled={disabled}
    >{primaryBtnText}</button>
  )
}

export default PrimaryBtn;
