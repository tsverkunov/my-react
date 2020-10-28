const SEND_ARTICLE = 'my-react/newsReducer/SEND-ARTICLE';

let initialState = {
  articles: [
    // {id: 1, article: 'Hello! How are you?'}
  ],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ARTICLE:
      let newPost = {
        id: state.articles.length + 1,
        article: action.newArticleBody,
      };
      return {
        ...state,
        articles: [...state.articles, newPost]
      };
    default:
      return state;
  }
}
export const addNews = (newArticleBody) => ({type: SEND_ARTICLE, newArticleBody})

export const addNewsThunk = (newArticleBody) => (dispatch) => {
  dispatch(addNews(newArticleBody));
}
export default newsReducer;