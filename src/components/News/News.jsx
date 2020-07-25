import React, {useCallback} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect";
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "reselect";
import AddArticleForm from "./NewsForm/AddArticleForm";
import Article from "./Article/Article";
import {addNewsThunk} from "../../redux/newsReducer";


// const getArticles = createSelector(
//    state => state.newsReducer.articles
// )

const News = () => {
  const articles = useSelector(state => state.newsReducer.articles);
  const dispatch = useDispatch();
  const addArticle = useCallback((news) => {
       dispatch(addNewsThunk(news))
     }, [dispatch]);

  const articlesElements = articles.map(a =>
     <Article key={a.id}
              article={a.article}
     />);
  return (
     <>
       <div>
         {articlesElements}
         <AddArticleForm addArticle={addArticle}/>
       </div>
     </>
  )
}

// const PRODUCTS = [
//    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

export default compose(withAuthRedirect)(News);


