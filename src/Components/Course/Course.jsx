import './Course.css'

const Course = ({selectedCourses,Remainig,TotalCredit}) => {
   
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
            <p className='price'>Total Price : USD </p>
              
        </div>
    );
};

export default Course;