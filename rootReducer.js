import counterReducer from './slices/counterSlice';
import employeesReducer from './slices/employeesSlice';
import userListReducer from './slices/user-list-feature';

const rootReducer = {
	counter: counterReducer,
	employees: employeesReducer,
	users: userListReducer,
};

export default rootReducer;
