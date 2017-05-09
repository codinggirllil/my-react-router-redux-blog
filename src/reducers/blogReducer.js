import * as types from '../actions/actionTypes';  
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function blogReducer(state = initialState.blogs, action) {  
  switch(action.type) {
    case types.LOAD_BLOGS_SUCCESS:
      return action.blogs
    case types.CREATE_BLOG_SUCCESS:
      browserHistory.push(`/blogs/${action.blog.id}`)
      return [
        ...state.filter(blog => blog.id !== action.blog.id),
        Object.assign({}, action.blog)
      ]
    case types.UPDATE_BLOG_SUCCESS:
      return [
        ...state.filter(blog => blog.id !== action.blog.id),
        Object.assign({}, action.blog)
      ]
    case types.DELETE_BLOG_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfBlogToDelete = state.findIndex(blog => {
        return blog.id == action.blog.id
      })
      newState.splice(indexOfBlogToDelete, 1);
      browserHistory.push('/blogs');
      return newState;
    }
    default: 
      return state;
  }
}