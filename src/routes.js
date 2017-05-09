import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/App';  
import BlogsPage from './components/blogs/BlogsPage';  
import BlogPage from './components/blogs/BlogPage';
import NewBlogPage from './components/blogs/NewBlogPage';

export default (  
  <Route path="/" component={App}>
    <Route path="/blogs" component={BlogsPage} >
      <Route path="/blogs/new" component={NewBlogPage} />
      <Route path="/blogs/:id" component={BlogPage} />
    </Route>
  </Route>
);