import { useEffect } from "react";
import { useState } from "react";
import './Courses.css'
import Course from "../Course/Course";
import { toast } from 'react-toastify';

const Courses = () => {

    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [Remainig, setRemaining] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    const handleSelectCourse = (course) => {
        const isExist = selectedCourses.find((item) => item.id == course.id);
        let count = course.course_duration;
        let total = course.course_price;
     
        if (isExist) {
            return toast('This course has been already added');
        }
        else {
            selectedCourses.forEach((item) => {
                count += item.course_duration;
                total += item.course_price;

            });
            let totalPriceValue = total.toFixed(2);

            const creditRemaining = 20 - count;
            if (count > 20) {
                return toast('This course may be exceed the credit limit of 20 please try again.');
            }
            else {
                setTotalCredit(count);
                setRemaining(creditRemaining);
                setTotalPrice(totalPriceValue);
                setSelectedCourses([...selectedCourses, course]);
            }

        }

    }


    return (
        <div>
            <div className='home-container'>
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
                                    <p> Price : {course.course_price}</p>
                                </div>
                                <div className='card-item'>
                                    <img src="https://i.ibb.co/NC0Sjf5/icons8-open-book-32.png" alt="" />
                                    <p>Credit : {course.course_duration}hr</p>

                                </div>

                            </div>

                            <button onClick={() => handleSelectCourse(course)} className='card-btn'>Select</button>

                        </div>))
                    }

                </div>

                <div className='cart'>
                    <Course selectedCourses={selectedCourses}
                        Remainig={Remainig}
                        TotalCredit={totalCredit}
                        TotalPrice={totalPrice} >
                    </Course>
                </div>

            </div>

        </div>
    );
};

export default Courses;