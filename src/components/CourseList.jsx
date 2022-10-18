import React from 'react';
import useCourseStore from '../store/courseStore';

const CourseList = () => {
    const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus
        })
    );

    return (
        <>
            <ul>
                {courses.map((course, i) => {
                    return (
                        <>
                            <li
                                className={`course-item`}
                                style={{
                                    backgroudColor: course.completed ? "#00FF0044" : "white"
                                }}
                                key={i}
                            >
                                <div className="course-name-check-box">
                                    <span className="course-item-col-1">
                                        <input
                                            checked={course.completed}
                                            type="checkbox"
                                            onChange={(e) => {
                                                toggleCourseStatus(course.id)
                                            }}
                                            id={course.id}
                                        />
                                        <label htmlFor={course.id}>{course?.title}</label>
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        removeCourse(course.id)
                                    }}
                                    className="delete-btn">X</button>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default CourseList;