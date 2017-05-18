import React, {PropTypes} from 'react';  
import TextInput from '../common/TextInput';

class BlogForm extends React.Component {  
   constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <TextInput
            name="title"
            label="title"
            ref="title"
            value={this.props.blog.title}
            onChange={this.props.onChange}/>

          <TextInput
            name="text"
            label="text"
            ref="title"
            value={this.props.blog.text}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

BlogForm.propTypes = {  
  blog: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default BlogForm;  