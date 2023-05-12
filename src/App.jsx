import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routers from './routes/Route';
import { useState } from 'react';
import CourseContext from './context/CourseContext';

function App() {
  const [course, setCourse] = useState([])
  const value = { course, setCourse}

  return (
    <CourseContext. Provider value={value}>
      <BrowserRouter>
        <Routes>
          {Routers.map((router,index) => {
            return <Route path={router.path} element={router.element} key={index} />
          })}
        </Routes>
      </BrowserRouter>
    </CourseContext. Provider>
  )
}

export default App