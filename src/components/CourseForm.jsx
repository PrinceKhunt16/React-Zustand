import React, { useState } from 'react';
import useCourseStore from '../store/courseStore';

const CourseForm = () => {
    const addCourse = useCourseStore((state) => state.addCourse);
    const [courseTitle, setCourseTitle] = useState("");

    const handleCourseSubmit = () => {
        if (!courseTitle) return alert('Please add a course title');

        addCourse({
            id: Date.now(),
            title: courseTitle
        });

        setCourseTitle("");
    }

    return (
        <div className="form-container">
            <input
                value={courseTitle}
                onChange={(e) => {
                    setCourseTitle(e.target.value)
                }}
                className="form-input" />
            <button
                onClick={() => {
                    handleCourseSubmit();
                }}
                className="form-submit-btn"
            >
                Add Course
            </button>
        </div>
    )
}

export default CourseForm;