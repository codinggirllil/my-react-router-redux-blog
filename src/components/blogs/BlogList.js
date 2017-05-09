import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BlogList = ({blogs}) => {  
  return (
      <ul className="list-group">
        {blogs.map(blog => 
          <li className="list-group-item" key={blog.id}><Link to={'/blogs/' + blog.id}>{blog.title}</Link></li>
        )}
      </ul>
  );
};

BlogList.propTypes = {  
  blogs: PropTypes.array.isRequired
};

export default BlogList;  