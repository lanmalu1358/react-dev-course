import { INCREMENT, DECREMENT, RESET } from '../actions/index';
import { ADD_EVENT, DELETE_EVENT, ALLDELI_EVENT, DELETEID } from '../actions/index';

const reducer = (state = [], action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case RESET:
            return { count: 0 };
        case ADD_EVENT:
            const addevent = { title: action.title, body: action.body, comment: action.comment };
            const addid = state.length + 1;
            return [...state, { addid, ...addevent }];



        // ヒント：Array.prototype.filterで調べる
        case DELETE_EVENT:
            const deleteevent = { id: action.id };
            const DELETEID = state.length - 1;
            return [...state, { DELETEID, ...deleteevent }];
        case ALLDELI_EVENT:
            return [];
        default:
            return state;
    }
};

export default reducer;