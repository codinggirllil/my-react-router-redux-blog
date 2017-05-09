class BlogApi {  
  static getAllBlogs() {
    return fetch('http://morning-ridge-15434.herokuapp.com/Blog/api').then(response => {
      debugger;
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static updateBlog(blog) {
    const request = new Request('http://morning-ridge-15434.herokuapp.com/Blog/api/${blog.id}', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({blog: blog})
   });
 }
 static createBlog(blog) {
    const request = new Request('http://morning-ridge-15434.herokuapp.com/Blog/api', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({blog: blog})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static deleteBlog(blog) {
    const request = new Request('http://morning-ridge-15434.herokuapp.com/Blog/api/${blog.id}', {
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