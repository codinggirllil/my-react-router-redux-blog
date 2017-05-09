// src/components/common/Header.js

import React, {PropTypes} from 'react';  
import { Link, IndexLink } from 'react-router';

const Header = () => {  
  return (
    <nav>
      <IndexLink to="/" 
        activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/blogs" activeClassName="active">Blogs</Link>
    </nav>
  );
};

export default Header;