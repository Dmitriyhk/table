import React, { useEffect, useState } from "react";

import styles from "./Table.module.scss";

const Cell = ({ item, callback, isDisabled = false }) => {
  const [state, setState] = useState(item);

  useEffect(() => {
    if (item !== state) {
      setState(item);
    }
  }, [item]);

  const inputHandler = () => {
    if (item !== state) {
      callback && callback(state);
    }
  };

  return (
    <td className={styles.cell}>
      <input
        onBlur={inputHandler}
        disabled={isDisabled}
        value={state}
        onChange={({ target }) => setState(target.value)}
        type="text"
      />
    </td>
  );
};

export default Cell;
