import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseAction';
import {bindActionCreators} from 'redux';
class CoursesPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      course:{title:''}
    };
    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onTitleChanged(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  }

  onSave(event){
  //  this.props.dispatch(courseActions.createCourse(this.state.course));
  //  this.props.saveCourse(this.state.course);
  console.log(this.props.actions)
    this.props.actions.createCourse(this.state.course)
    this.state.course.title = '';

  }

  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChanged}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onSave} />

      </div>
    );
  }
}
CoursesPage.propTypes={
  courses:PropTypes.array.isRequired,
//  saveCourse:PropTypes.func.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
  return{
    courses:state.courses //Reducer
  };
}
/* Optional component... dispatch will be created automatically by connect . If omitted, see the commented code in save method*/
function mapPropsToDispatch(dispatch){
  return {
  /*  saveCourse: (course)=>dispatch(courseActions.createCourse(course))*/
    actions:    bindActionCreators(courseActions,dispatch)
  };
}


export default connect(mapStateToProps,mapPropsToDispatch)(CoursesPage);
