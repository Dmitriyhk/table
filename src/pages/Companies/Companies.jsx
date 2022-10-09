import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../components/Table/Wrapper";
import {
  addCompanyField,
  addEmployeeField,
  allCompanyChecked,
  allEmployeeChecked,
  delCompanyField,
  delEmployeeField,
} from "../../redux/slices/companySlice";

import styles from "./Companies.module.scss";

const Companies = () => {
  const companyData = useSelector((state) => state.company.company);
  const checkedData = useSelector((state) => state.company.checked);

  const dispatch = useDispatch();

  return (
    <div className={styles.companies}>
      <Wrapper
        title="Компании"
        addField={() => dispatch(addCompanyField())}
        delField={() => dispatch(delCompanyField())}
        data={companyData}
        allChecked={(check) =>
          dispatch(allCompanyChecked({ isChecked: check }))
        }
      />
      {checkedData.length === 1 && (
        <Wrapper
          title="Сотрудники"
          checkedData={checkedData}
          addField={() => dispatch(addEmployeeField({ index: checkedData[0] }))}
          delField={() => dispatch(delEmployeeField({ index: checkedData[0] }))}
          data={companyData[checkedData[0]].employees}
          allChecked={(check) => {
            dispatch(
              allEmployeeChecked({ index: checkedData[0], isChecked: check })
            );
          }}
        />
      )}
    </div>
  );
};

export default Companies;
