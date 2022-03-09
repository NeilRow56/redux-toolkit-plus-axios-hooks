import { createSlice } from '@reduxjs/toolkit';
import { EmployeeService } from '../services/EmployeeService';

const initialState = {
	employees: EmployeeService.getAllEmployees(),
};

const employeesSlice = createSlice({
	name: 'employees',
	initialState: initialState,
	reducers: {
		updateSelected: function (state, action) {
			state.employees = state.employees.map((employee) => {
				if (employee.id === action.payload) {
					return {
						...employee,
						isSelected: !employee.isSelected,
					};
				} else return employee;
			});
		},
	},
});

export const { updateSelected } = employeesSlice.actions;
export default employeesSlice.reducer;
