import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import * as blogActions from '../../actions/blogActions';
import BlogForm from './BlogForm'


class BlogPage extends React.Component {  
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      blog: this.props.blog
    };
    this.updateBlogState = this.updateBlogState.bind(this);
    this.saveBlog = this.saveBlog.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
  }

  updateBlogState(event) {
    const field = event.target.name;
    const blog = this.state.blog;
    blog[field] = event.target.value;
    return this.setState({blog: blog});
  }

  saveBlog(event) {
    event.preventDefault();
    this.props.actions.updateBlog(this.state.blog);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  deleteBlog(event) {
    this.props.actions.deleteBlog(this.state.blog)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.blog.id != nextProps.blog.id) {
      this.setState({blog: nextProps.blog});
    }
  }

  render() {
     if (this.state.isEditing) {
      return (
      <div>
        <h1>edit blog</h1>
        <BlogForm 
          blog={this.state.blog} 
          onSave={this.saveBlog} 
          onChange={this.updateBlogState} />  
      </div>
      )
    }

    return(
    	<div className="col-md-8 col-md-offset-2">
        <h1>{this.props.blog.name}</h1>
        <p>title: {this.props.blog.title}</p>
        <p>content: {this.props.blog.text}</p>
        <button onClick={this.toggleEdit} 
          className="btn btn-default">edit</button>
        <button 
           onClick={this.deleteBlog} 
           className="btn btn-default">
           delete
       </button>
      </div>
    );
  }
}


BlogPage.propTypes = {
  blog: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let blog = {title: '', text: ''};
  const blogId = ownProps.params.id;
  if (state.blogs.length > 0) {
    blog = Object.assign({}, state.blogs.find(blog => blog.id == blogId));
  }
  return {blog: blog};
} 

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(blogActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);  