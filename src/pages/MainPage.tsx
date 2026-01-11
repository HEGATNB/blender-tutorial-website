import '../styles/MainPage.css'
import { useState } from 'react';
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import PercentImage from "../assets/progress_bar_percent.png"

const courses = [
    {id:1, name:"1. Установка программы", status:"completed"},
    {id:2, name:"2. О рабочей среде", status:"not-completed"},
    {id:3, name:"3. Горячие клавиши", status:"not-completed"},
    {id:4, name:"4. Полигоны", status:"not-completed"},
    {id:5, name:"5. Первая модель", status:"not-completed"}
];

const progress_value = courses.filter(course => course.status === "completed").length / courses.length;

async function getInfo(lessonId){
    try {
        const response = await fetch(`/guide_pages/lesson(${lessonId}).json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка загрузки:', error);
    }
}

function AboutUs() {
    const [lessonContent, setLessonContent] = useState('');
    const [isCourseActive, setCourseActive] = useState(false);
    return (
        <div className="info-container">
            <div className="left-right-group">
                <div className={ isCourseActive ? "guide-space" : "work-space"}>
                    <p className = "guide-text" >{lessonContent}</p>
                </div>
                <div className="courses-list">
                    {courses.map((course, index) => (
                        <button
                            className={
                                index === 0 ? "course-first" :
                                index === courses.length - 1 ? "course-last" :
                                course.id % 2 === 0 ? "course-active" : "course-inactive"
                            }
                            onClick={async () => {
                                let data = await getInfo(course.id);
                                setLessonContent(`${data.sections[0].text}`);
                                setCourseActive(true);
                            }}
                            key={course.id}
                        >
                            {course.status === "completed" ?
                                <FaLockOpen style={{color: '#2fab24', marginRight: '8px'}} /> :
                                <FaLock style={{color: '#555555', marginRight: '8px'}} />
                            }
                            {course.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="design-line"></div>
            <div className = "progress-container">
                <img src={PercentImage} alt="Прогресс"></img>
                <progress className = "progress-bar" value = {progress_value} max = "1"></progress>
            </div>
        </div>
    );
}

export default AboutUs