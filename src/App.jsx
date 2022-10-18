import React from 'react';
import "./App.css";
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

const App = () => {
    return (
        <div className='main-container'>
            <h1 className='heading'>My Course list</h1>
            <CourseForm />
            <CourseList />
        </div>
    );
}

export default App;