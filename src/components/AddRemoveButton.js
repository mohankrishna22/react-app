import React, { useState } from "react";
import "./Styles.css";
function AddRemoveButton() {
  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount(count + 1);
  };

  const handleRemoveClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      {count > 0 ? (
        <div className="addRemoveButton">
          <div onClick={handleAddClick} className="addItem">
            +
          </div>
          <div className="buttonContent">{count}</div>
          <div onClick={handleRemoveClick} className="removeItem">
            -
          </div>
        </div>
      ) : (
        <div className="initialAdd" onClick={handleAddClick}>
          Add
        </div>
      )}
    </div>
  );
}

export default AddRemoveButton;
