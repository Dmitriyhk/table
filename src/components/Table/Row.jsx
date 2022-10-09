import React from "react";
import { useDispatch } from "react-redux";
import {
  updateCompanyField,
  updateEmployeeField,
} from "../../redux/slices/companySlice";
import Cell from "./Cell";
import CheckboxCell from "./CheckboxCell";
import classNames from "classnames";

import styles from "./Table.module.scss";

const Row = ({ data, idx }) => {
  const dispatch = useDispatch();
  return (
    <tr
      className={classNames(styles.row, {
        [styles.row__active]: data.isChecked,
      })}
    >
      {data.employees ? (
        <>
          <CheckboxCell
            isChecked={data.isChecked}
            setIsChecked={() =>
              dispatch(
                updateCompanyField({
                  index: idx,
                  field: "isChecked",
                  data: !data.isChecked,
                })
              )
            }
          />
          <Cell
            callback={(str) =>
              dispatch(
                updateCompanyField({ index: idx, field: "name", data: str })
              )
            }
            item={data.name}
          />
          <Cell isDisabled item={data.employees.length} />
          <Cell
            callback={(str) =>
              dispatch(
                updateCompanyField({
                  index: idx,
                  field: "address",
                  data: str,
                })
              )
            }
            item={data.address}
          />
        </>
      ) : (
        <>
          <CheckboxCell
            isChecked={data.isChecked}
            setIsChecked={() =>
              dispatch(
                updateEmployeeField({
                  index: idx,
                  field: "isChecked",
                  data: !data.isChecked,
                })
              )
            }
          />
          <Cell
            callback={(str) =>
              dispatch(
                updateEmployeeField({
                  index: idx,
                  field: "surname",
                  data: str,
                })
              )
            }
            item={data.surname}
          />
          <Cell
            callback={(str) =>
              dispatch(
                updateEmployeeField({ index: idx, field: "name", data: str })
              )
            }
            item={data.name}
          />
          <Cell
            callback={(str) =>
              dispatch(
                updateEmployeeField({
                  index: idx,
                  field: "position",
                  data: str,
                })
              )
            }
            item={data.position}
          />
        </>
      )}
    </tr>
  );
};

export default Row;
