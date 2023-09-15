import './Course.css'
import PropTypes from 'prop-types'; 

const Course = ({selectedCourses,Remainig,TotalCredit,TotalPrice}) => {
    let value =  selectedCourses.map((course,idx) => (
    <li   key = {idx}>{course.course_name}</li>
      ));
   
    return (
        <div  className="cart-container">
             <h3 className="remainig">Credit Hour Remaining {Remainig} hr</h3>
            <hr />
            <h2>Course Name</h2>
            {
              <ol className='list-item'>
                {value}
              </ol>
            }
            <hr />
            <p className='credit-hour'>Total Credit Hour : {TotalCredit}</p>
         
            <hr />
            <p className='price'>Total Price : {TotalPrice} USD </p>
              
        </div>
    );
};

Course.propTypes = {
    selectedCourses:PropTypes.object.isRequired,
    Remainig:PropTypes.object.isRequired,
    TotalCredit:PropTypes.object.isRequired,
    TotalPrice:PropTypes.object.isRequired

}
export default Course;