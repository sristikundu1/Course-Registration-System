import { useEffect } from "react";
import { useState } from "react";
import './Courses.css'

const Courses = () => {

    const [allCourses, setAllCourses] = useState([]);


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])


    return (
        <div>
            <div className='card-container'>
                {
                    allCourses.map((course) => (<div key={course.id} className='card'>
                        <div className='card-img'>
                            <img className='photo' src={course.course_img} alt="" />
                        </div>
                        <h3>{course.course_name}</h3>
                        <p className='details'>{course.course_details}</p>
                        <div className='info'>
                            <div className='card-item'>
                                <img src="https://i.ibb.co/Y2MX66s/8666589-dollar-sign-icon.png" alt="" />
                                <p> Price:{course.course_price}</p>
                            </div>
                            <div className='card-item'>
                                <img src="https://i.ibb.co/NC0Sjf5/icons8-open-book-32.png" alt="" />
                                <p>Credit: {course.course_duration} hr</p>

                            </div>

                        </div>

                        <button className='card-btn'>Select</button>

                    </div>))
                }

            </div>


        </div>
    );
};

export default Courses;