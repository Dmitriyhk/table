import React from "react";
import classNames from "classnames";

import styles from "./Table.module.scss";

const TableHeader = ({ isCompany }) => (
  <thead>
    {isCompany ? (
      <tr className={classNames(styles.row, styles.row__header)}>
        <th>Чекбокс</th>
        <th>Название компании</th>
        <th>Кол-во сотрудников</th>
        <th>Адрес</th>
      </tr>
    ) : (
      <tr className={classNames(styles.row, styles.row__header)}>
        <th>Чекбокс</th>
        <th>Фамилия </th>
        <th>Имя</th>
        <th>Должность</th>
      </tr>
    )}
  </thead>
);

export default TableHeader;
