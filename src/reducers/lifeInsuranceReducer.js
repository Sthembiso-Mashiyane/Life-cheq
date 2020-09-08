import lifeInsurances from '../data/lifeInsurance.json'

const lifeInsuranceReducer = (state = lifeInsurances, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                lifeInsurances: state.lifeInsurances.concat(action.payload)
            }
        case 'EDIT':
                return {
                ...state,
                  lifeInsurances: state.lifeInsurances.map(
                  (content, i) => content.id === action.payload.id ? {...content,  b : action.payload.employeeName ,  employeeDepartment : action.payload.employeeDepartment }
                                                                : content)
                     };
        case 'DELETE':
            return {
                  ...state,
                  lifeInsurances: state.lifeInsurances.filter(item => item.id !== action.payload)
                                };
        default:
            return state
    }
};

export default lifeInsuranceReducer;
