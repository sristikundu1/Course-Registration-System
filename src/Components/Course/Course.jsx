import './Course.css'
import PropTypes from 'prop-types'; 

const Course = ({selectedCourses,Remainig,TotalCredit,TotalPrice}) => {
   
    return (
        <div  className="cart-container">
             <h3 className="remainig">Credit Hour Remaining {Remainig} hr</h3>
            <hr />
            <h2>Course Name</h2>
            {
               selectedCourses.map((course,idx) => ( <ol className='list-item'  key = {idx}> 
                 <li>{course.course_name}</li></ol>
                   ))
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