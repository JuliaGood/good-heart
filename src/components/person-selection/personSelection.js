import "./personSelection.css";
import PersonSelectionItem from "../person-selection-item/personSelectionItem";

function PersonSelection ({ personTypes, activePerson, personTypeClick }){

    return (
      <div className="person-selection">
        {
          personTypes.map((type, index) => (
            <PersonSelectionItem
              key={index}
              personIndex={index}
              personType={type}
              isActive={activePerson === index}
              personTypeClick={personTypeClick}
            />
          ))
        }
      </div>
    )
} 

export default PersonSelection;
