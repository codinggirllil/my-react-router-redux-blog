import React, {PropTypes} from 'react';  
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/blogActions';
import BlogList from './BlogList';

class BlogsPage extends React.Component {  

	componentWillMount() {
	    if (this.props.blogs[0].id == '') {
	      this.props.dispatch(actions.loadBlogs());
	    }
  	}

	render() {
		const blogs = this.props.blogs;
    	return (
	    <div className="col-md-12">
	        <h1>Blogs
				<Link to={'/blogs/new'} className="btn btn-primary">
            		+ blog
          		</Link> 
	        </h1>
	        <div className="col-md-4">
	          <BlogList blogs={blogs} />
	        </div>
	        <div className="col-md-8">
	          {this.props.children}
	        </div>
	    </div>
    );
  }
}


BlogsPage.propTypes = {  
  blogs: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {  
  return {
    blogs: state.blogs
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsPage);  