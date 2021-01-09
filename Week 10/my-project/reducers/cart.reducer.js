import create_UUID from '../utils/uuid';



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { title: action.book.title, price: action.book.price, author: action.book.author, uri: action.book.uri, id: create_UUID()}];
        case "REMOVE":
            //return state.filter(todo => todo.id !== action.id);
            return state;
        default:
            return state;
    }
};
export default reducer;