import React from 'react';
import * as blogActions from '../actions/blogActions';

class BlogApi {
  static requestHeaders() {
    return {'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'}
  }

  static getAllBlogs() {
    return fetch('http://morning-ridge-15434.herokuapp.com/Blog/api').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static updateBlog(blog) {
    var http = new XMLHttpRequest();
    var url = "http://morning-ridge-15434.herokuapp.com/Blog/api/"+blog.id;
    var params = this.buildPostString(blog);
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onload = function() {//Call a function when the state changes.
         if (http.readyState === XMLHttpRequest.DONE) {
            if (http.status === 200) {
              // var response = JSON.parse(http.responseText);
              return {title: "mock", text: "mock"};
            }
            else {
              return response; //change it to error message
            }
          }
    }
    http.send(params);
 }
 static createBlog(formData) {

    var http = new XMLHttpRequest();
    var url = "http://morning-ridge-15434.herokuapp.com/Blog/api/";
    var params = this.buildPostString(formData);
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onload = function() {//Call a function when the state changes.
         if (http.readyState === XMLHttpRequest.DONE) {
            if (http.status === 200) {
              // var response = JSON.parse(http.responseText);
              return {title: "mock", text: "mock"};
            }
            else {
              return response; //change it to error message
            }
          }
    }
    http.send(params);
  }

  static buildPostString(formData) {
    var newString = 'title=' + formData.title + '&text=' + formData.text;
    return newString;
  }

  static deleteBlog(blog) {
    const request = new Request('http://morning-ridge-15434.herokuapp.com/Blog/api/'+blog.id, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default BlogApi;
