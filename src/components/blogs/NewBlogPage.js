import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import * as blogActions from '../../actions/blogActions';  
import BlogForm from './BlogForm';


class NewBlogPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blog: {
        title: '', 
        text: ''
      },
      saving: false
    };
    this.saveBlog = this.saveBlog.bind(this);
    this.updateBlogState = this.updateBlogState.bind(this);
  }

  updateBlogState(event) {
    const field = event.target.name;
    const blog = this.state.blog;
    blog[field] = event.target.value;
    return this.setState({blog: blog});
  }

  saveBlog(event) {
    event.preventDefault();
    this.props.actions.createBlog(this.state.blog)
  }

  render() {
    return (
      <div>
        <h1>new blog</h1>
        <BlogForm 
          blog={this.state.blog} 
          onSave={this.saveBlog}
          onChange={this.updateBlogState}/>
      </div>
    );
  }
}

NewBlogPage.propTypes = {  
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {  
  return {}
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(blogActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewBlogPage);  