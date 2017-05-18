import * as types from './actionTypes';
import blogApi from '../api/BlogApi';

export function loadBlogs() {
  return function(dispatch) {
    return blogApi.getAllBlogs().then(blogs => {
      dispatch(loadBlogsSuccess(blogs.blog));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadBlogsSuccess(blogs) {
  return {type: 'LOAD_BLOGS_SUCCESS', blogs};
}

export function updateBlog(blog) {
  return function (dispatch) {
    return blogApi.updateBlog(blog).then(responseBlog => {
      dispatch(updateBlogSuccess(responseBlog));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateBlogSuccess(blog) {
  return {type: types.UPDATE_BLOG_SUCCESS, blog}
}

export function createBlogSuccess(blog) {
  debugger;
  return {type: types.CREATE_BLOG_SUCCESS, blog}
}

export function createBlog(blog) {
  return function(dispatch) {
    return blogApi.createBlog(blog).then(response => {
      debugger;
      dispatch(createCatSuccess(response));
      return response;
    }).catch(error => {
      throw(error);
    })
  }
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
