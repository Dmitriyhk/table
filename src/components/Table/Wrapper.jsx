import React, { useEffect, useState } from "react";
import Table from "./Table";

import styles from "./Table.module.scss";

const Wrapper = ({
  data,
  delField,
  addField,
  allChecked,
  title,
  checkedData,
}) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    allChecked(check);
  }, [check]);

  useEffect(() => {
    setCheck(false);
  }, [checkedData]);

  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.wrapper_header}>
        <label>
          <input
            checked={check}
            onChange={() => setCheck((state) => !state)}
            type="checkbox"
          />
          Выбрать всё
        </label>
        <div>
          <button
            className={styles.wrapper_header__btn}
            onClick={() => {
              delField();
              setCheck(false);
            }}
          >
            Удалить выбранные
          </button>
          <button className={styles.wrapper_header__btn} onClick={addField}>
            Добавить {checkedData ? "сотрудника" : "компанию"}
          </button>
        </div>
      </div>
      <Table isCompany={!checkedData} data={data} />
    </div>
  );
};

export default Wrapper;
