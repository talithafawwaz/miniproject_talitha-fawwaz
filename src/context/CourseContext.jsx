import React from "react"

// set context
const CourseContext = React.createContext({
    course: [], // initial state
    setCourse: () => {} // initial method setState
})

export default CourseContext