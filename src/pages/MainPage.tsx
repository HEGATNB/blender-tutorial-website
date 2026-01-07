import '../styles/MainPage.css'
import { createPortal } from 'react-dom';

const courses = [
    {id:1, name:"1. Установка программы"},
    {id:2, name:"2. О рабочей среде"},
    {id:3, name:"3. Горячие клавиши"},
    {id:4, name:"4. Полигоны"},
    {id:5, name:"5. Первая модель"}
    ];


function AboutUs() {
    return (
        <div className="info-container">
            <div className="main-info">
            </div>
            <div className="courses-list">
                {courses.map((course, index) => (
                    <a
                        className={
                            index === 0 ? "course-first" :
                            index === courses.length - 1 ? "course-last" :
                            course.id % 2 === 0 ? "course-active" : "course-inactive"
                        }
                        key={course.id}
                    >
                        {course.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default AboutUs