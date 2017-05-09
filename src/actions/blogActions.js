import * as types from './actionTypes';  
import blogApi from '../api/BlogApi';
import stateStore from '../reducers/stateStore';

export function loadBlogs() {  
  // return function(dispatch) {
  //   return blogApi.getAllBlogs().then(blogs => {
  //     debugger;
  //     dispatch(loadBlogsSuccess(blogs.blog.posts));
  //   }).catch(error => {
  //     throw(error);
  //   });
  // };
  return {
  	type: 'LOAD_BLOGS_SUCCESS', 
  	blogs: stateStore.blogs
  }
}

export function loadBlogsSuccess(blogs) {  
  return {type: 'LOAD_BLOGS_SUCCESS', blogs};
}

export function updateBlog(blog) {  
  // return function (dispatch) {
  //   return blogApi.updateBlog(blog).then(responseBlog => {
  //     dispatch(updateBlogSuccess(responseBlog));
  //   }).catch(error => {
  //     throw(error);
  //   });
  // };
  return {type: types.UPDATE_BLOG_SUCCESS, blog}
}

export function updateBlogSuccess(blog) {  
  return {type: types.UPDATE_BLOG_SUCCESS, blog}
}

export function createBlogSuccess(blog) {  
  return {type: types.CREATE_BLOG_SUCCESS, blog}
}

export function createBlog(blog) {  
  return function (dispatch) {
    return blogApi.createBlog(blog).then(responseBlog => {
      dispatch(createBlogSuccess(responseBlog));
      return responseBlog;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteBlogSuccess(blog) {  
  return {type: types.DELETE_BLOG_SUCCESS, blog}
}

export function deleteBlog(blog) {  
  return function(dispatch) {
    return blogApi.deleteBlog(blog).then(() => {
      console.log('Deleted ${blog.id}')
      dispatch(deleteBlogSuccess(blog));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}