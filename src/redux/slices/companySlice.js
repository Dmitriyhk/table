import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { companyData } from "../../mock/companyData";

const initialState = {
  company: companyData,
  checked: [],
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    updateCompanyField(state, action) {
      const { index, field, data } = action.payload;
      state.company = [
        ...state.company.slice(0, index),
        { ...state.company[index], [field]: data },
        ...state.company.slice(index + 1),
      ];
      if (field === "isChecked") {
        if (data) {
          state.checked.push(index);
        } else {
          state.checked = state.checked.filter((el) => el !== index);
        }
      }
    },
    addCompanyField(state) {
      const id = uuid();
      state.company.push({
        id,
        name: "",
        employees: [],
        address: "",
        isChecked: false,
      });
    },
    delCompanyField(state) {
      state.company = state.company.filter((el, index) => {
        const checkIndex = state.checked.indexOf(index);
        if (checkIndex >= 0) {
          state.checked = [
            ...state.checked.slice(0, checkIndex),
            ...state.checked.slice(checkIndex + 1),
          ];
        }
        return !el.isChecked;
      });
    },
    allCompanyChecked(state, action) {
      state.checked = [];
      state.company = state.company.map((el, index) => {
        if (action.payload.isChecked) {
          state.checked.push(index);
          return { ...el, isChecked: true };
        } else {
          return { ...el, isChecked: false };
        }
      });
    },
    updateEmployeeField(state, action) {
      const { index, field, data } = action.payload;
      const indexCompany = state.checked[0];
      state.company = [
        ...state.company.slice(0, indexCompany),
        {
          ...state.company[indexCompany],
          employees: [
            ...state.company[indexCompany].employees.slice(0, index),
            { ...state.company[indexCompany].employees[index], [field]: data },
            ...state.company[indexCompany].employees.slice(index + 1),
          ],
        },
        ...state.company.slice(indexCompany + 1),
      ];
    },
    addEmployeeField(state, action) {
      const id = uuid();
      const { index } = action.payload;
      state.company[index].employees.push({
        id,
        name: "",
        surname: "",
        position: "",
        isChecked: false,
      });
    },
    delEmployeeField(state, action) {
      const { index } = action.payload;
      state.company = [
        ...state.company.slice(0, index),
        {
          ...state.company[index],
          employees: state.company[index].employees.filter(
            (el) => !el.isChecked
          ),
        },
        ...state.company.slice(index + 1),
      ];
    },
    allEmployeeChecked(state, action) {
      const { index, isChecked } = action.payload;
      state.company[index].employees = state.company[index].employees.map(
        (el) => ({ ...el, isChecked })
      );
    },
  },
});

export const {
  updateCompanyField,
  addCompanyField,
  delCompanyField,
  allCompanyChecked,
  updateEmployeeField,
  addEmployeeField,
  delEmployeeField,
  allEmployeeChecked,
} = companySlice.actions;

export default companySlice.reducer;
