// import uuid from 'react-native-uuid';


//usage 
//var testUUID = uuid.v1();

//id: 1, title: 'Book 1', author: 'Roxy Traynor', price: 2.00, uri: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { title: action.book.title, price: action.book.price, author: action.book.author, uri: action.book.uri, id: 1}];
        case "REMOVE":
            //return state.filter(todo => todo.id !== action.id);
            return state;
        default:
            return state;
    }
};
export default reducer;