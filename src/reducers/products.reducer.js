import * as actions from '../actions';

const initialState = {
	items: [],
	loadingProducts: false,
	selectedProduct: null,
};

const productsReducer = function(state = initialState, action) {
	switch(action.type) {
		case actions.LOGIN:
			return Object.assign({}, state, {});
	}
	return state;
}

export default productsReducer;