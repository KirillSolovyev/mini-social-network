import { USER } from "../actions/actionTypes";

const initialState = {
	user: null,
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case USER.RETRIEVE:
			return { ...state, user: action.payload };
		case USER.POSTS:
			return { ...state, user: { ...state.user, posts: action.payload } };
		case USER.CREATE_POST:
			return { ...state, user: { ...state.user, posts: [ action.payload, ...state.user.posts ] } };
		default:
			return state;
	}
}

export default rootReducer;