const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi. How are you!", like: 15 },
    { id: 2, message: "It is my first post", like: 20 },
    { id: 3, message: "I am first men", like: 22 },
    { id: 4, message: "It is my first commit", like: 88 },
    { id: 5, message: "This is myfirst post", like: 77 },
  ],
  newPostText: "it-kamasutra.com"
};

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };

      let stateCopy = {...state};
      
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = " ";

      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      // stateCopy.posts = [...state.posts];  //этим мы копируем массив каждый раз это не правильно
      stateCopy.newPostText = action.newText;

      return stateCopy;
    }
    default:
      return state;
    
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
