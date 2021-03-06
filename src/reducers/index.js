import { INCREMENT, DECREMENT, RESET } from '../actions/index';
import { ADD_EVENT, DELETE_EVENT, ALLDELI_EVENT } from '../actions/index';
import { ADDDATA } from '../actions/index';

const reducer = (state = [], action) => {
    switch (action.type) {
        case INCREMENT:
            console.log(state.count)

            if (state.count !== 0) {
                if (state.count % 3 !== 0) {
                    return { ...state, count: state.count + 1 }
                }
                else if (state.count % 3 === 0) {
                    return { ...state, count: state.count + 10 }
                }
            }
            else if (state.count === 0) {
                return { ...state, count: state.count + 1 }
            }
            break;
        case DECREMENT:
            if (state.count % 3 !== 0)
                return { ...state, count: state.count - 1 };
            if (state.count % 3 === 0)
                return { ...state, count: state.count + 10 };
            break;
        case RESET:
            return { count: 0 };


        case ADD_EVENT:
            const addevent = { title: action.title, body: action.body, comment: action.comment };
            const addid = state.length + 1;
            return [...state, { id: addid, ...addevent }];

        // ヒント：Array.prototype.filterで調べる
        case DELETE_EVENT:
            console.log(state);
            console.log(action);
            const result = state.filter(data => data.id !== action.id);
            console.log(result);
            return result

        case ALLDELI_EVENT:
            return [];
        default:
            return state;

        case ADDDATA:
            console.log(action.data)
            return { data: action.data };
    }
};

export default reducer;