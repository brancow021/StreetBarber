import { DATA_STEPS_REGISTER, REGISTER_USER, REQUEST_NUMBERPHONE, REQUEST_VERIFYCODE } from "../types/registerTypes";

export const userReducer = (state, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return{
				...state,
				user: action.payload
			}
			
		case REQUEST_NUMBERPHONE:
			return{
				...state,
				requestNumberPhone: action.payload
			}

		case REQUEST_VERIFYCODE:
			return{
				...state,
				verifyCodeRequest: action.payload
			}

		case DATA_STEPS_REGISTER:
			return {
				...state,
				steps: action.payload
			}
				
		default:
			return state
	}
}
