import "./personSelectionItem.css";

function PersonSelectionItem({ personIndex, personType, isActive, personTypeClick }) {
  return (
    <div 
      className={`person-selection-item ${ isActive ? "active" : ""}`}
      onClick={() => personTypeClick(personIndex)}
    >
      {personType}
    </div>
  )  
}

export default PersonSelectionItem;
