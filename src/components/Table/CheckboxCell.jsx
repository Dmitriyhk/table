import React, { useState } from "react";

const CheckboxCell = ({ isChecked, setIsChecked }) => {
  return (
    <td className="table__cell">
      <input
        checked={isChecked}
        onChange={() => setIsChecked((state) => !state)}
        type="checkbox"
      />
    </td>
  );
};

export default CheckboxCell;
